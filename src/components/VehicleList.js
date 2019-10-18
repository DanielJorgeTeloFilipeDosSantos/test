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

  //   async componentDidMount() {
//     getData(data => {
// 		const data2 = JSON.parse(data)
// 		const Array = []
// 		data2.vehicles.map((res=>{
// 			getDataById(res.id,data=>{
// 				const obj1 = 
// 					JSON.parse(data)
// 				  const obj2 = {
// 					res
// 				  }
// 				  const obj3=Object.assign({},obj1, obj2);
// 				Array.push(obj3)
// 			})
// 		})
//       this.setState({
// 		data: Array
// 	})
// 	})	
//   }


  mapCarComponent() {
    return this.state.data.vehicles.map(carData => (
      <div>
        <Card data={carData} />
      </div>
    ));
  }

  mapCarTabletComponent() {
    return this.state.data.vehicles.map(carData => (
      <div style={{ float: "left", width: "50%", background: "white" }}>
        <Card data={carData} />
      </div>
    ));
  }

  render() {
    if (this.state.data) {
      console.log(this.state.data.vehicles.media);
      console.log(this.state.data);
      return (
        <div>
          <div>
            <h1>Card</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                width: "100%"
              }}
            >
              {this.mapCarComponent()}
            </div>
          </div>

          <div>
            <h1>Mobile</h1>
            <div
              style={{
                display: "block",
                backgroundColor: "white",
                width: "100%"
              }}
            >
              {this.mapCarComponent()}
            </div>
          </div>

          <h1>Tablet </h1>
          <div>
            <div
              style={{
                width: "100%"
              }}
            >
              {this.mapCarTabletComponent()}
            </div>
          </div>
        </div>
      );
    }

    return <h1>Loading...</h1>;
  }
}
