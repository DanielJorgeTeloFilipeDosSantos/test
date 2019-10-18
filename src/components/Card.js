import React, { Component } from "react";
import {getDataById} from '../api'
import xe from './images/xe_k17.jpg'

export class Desktop extends Component {
  constructor(){
    super();
    this.state={
    dataById:null
    }
    };
    // componentDidMount() {
		// 	getDataById(this.props.data.id,data=>{
    //     this.setState({
    //       dataById: JSON.parse(data)
    //     })
    //   })
    // }



    // browserifyLoadImg(){
    //   document.getElementById('file-input').onchange = function (e) {
    //     loadImage(
    //               'https://img.olhardigital.com.br/uploads/acervo_imagens/2013/01/r16x9/20130124112850_1200_675_-_google_imagens.jpg',
    //         function (img) {
    //             document.body.appendChild(img);
    //         },
    //         {maxWidth: 600} // Options
    //     );
    // };
    // }



    componentDidMount() {
      getDataById(this.props.data.id,data => {
        this.setState({
          dataById: JSON.parse(data)
        });
      });
    }


  render() {
    console.log("inside this props data", this.props);
    console.log("inside this props data", this.state.dataById);
    if(this.state.dataById){

      return (
        <div>
          <div id="carImg" style={{ width: "18rem" }}>
            {/* {this.putImageAsBackGround()} */}
            {/* <img src={xe} alt="Logo" /> */}
            {/* {this.browserifyLoadImg()} */}



            <img src={xe} alt="Logo" />



            <div style={{margin:'3vh',color:'#6495ED',textAlign:'center'}}>
              <h4 style={{borderTop: '5px solid #6495ED',borderBottom:'5px solid #6495ED'}}>Vehicle Name</h4>
            </div>
            <div>
              <p style={{color:'#6495ED',textAlign:'center'}}>{this.state.dataById.price}</p>
              <p style={{color:'#6495ED',textAlign:'center'}}>{this.state.dataById.description}</p>
            </div>
          </div>
        </div>
      );
    }
    return <div>loading..</div>
  }
}

export default Desktop;
