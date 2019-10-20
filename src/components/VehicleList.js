import React, { Component } from "react";
import { getData } from "../api";
import Card from "./Card";

export default class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getData(data => {
      this.setState({
        data: JSON.parse(data)
      });
    });
  }


  mapCarComponent() {
    return this.state.data.vehicles.map(carData => (
      <div className="column" style={{ backgroundColor: "white" }}>
        <Card data={carData} />
      </div>
    ));
  }

  render() {
    const spinnerPath = '/images/loading.gif'
    const loadingStyles={
      width: '20%',
      height: '50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: "url(" +  spinnerPath  + ")"
    };

    if (this.state.data) {
      return (
        <div>
          <div className="row">{this.mapCarComponent()}</div>
        </div>
      );
    }

    return <div style={loadingStyles}></div>;
  }
}
