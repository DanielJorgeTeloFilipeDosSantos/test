import React, { Component } from "react";
import {getDataById} from '../api'

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
            {/* <img src={fpace} alt="Logo" /> */}
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
