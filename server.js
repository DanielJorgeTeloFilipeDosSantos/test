const Express = require('express');
const path = require('path');
const hbs = require('hbs');
const sassMiddleware = require('node-sass-middleware');
const { join } = require('path');

const app = new Express();

app.set('view engine', 'html');
app.engine('html', hbs.__express); // eslint-disable-line
app.set('views', path.join(__dirname, './views'));

app.use(Express.static(path.join(__dirname, './dist')));
app.use(Express.static(path.join(__dirname, "./public")));

app.use(sassMiddleware({
    src: join(__dirname, 'public'),
    dest: join(__dirname, 'public'),
    outputStyle: process.env.NODE_ENV === 'development' ? 'nested' : 'compressed',
    sourceMap: true
  }));
  




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/vehicle', (req, res) => {
    const vehicles = require('./server_api/vehicles.js');
    res.json(vehicles);
});

app.get('/api/vehicle/:id', (req, res) => {
    const vehicle = require('./server_api/vehicle_'+ req.params.id +'.js');
    res.json(vehicle);
});

app.get('*', (req, res) => {
    res.render('index');
});

module.exports = app;
