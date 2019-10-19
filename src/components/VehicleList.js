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
      <div className="column" style={{ backgroundColor: "white" }}>
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
          <div className="row">{this.mapCarComponent()}</div>
        </div>
      );
    }

    return <h1>Loading...</h1>;
  }
}
