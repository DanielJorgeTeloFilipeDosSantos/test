import React, { Component } from "react";
import { getData } from "../api";
import CarCard from "./Card";

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

  //   parse(){
  // 	const obj = JSON.parse(this.state.data);
  //   }

  mapCarComponent() {
    return this.state.data.vehicles.map(carData => (
      <div>
        <CarCard data={carData} />
      </div>
    ));
  }

  mapCarTabletComponent() {
    return this.state.data.vehicles.map(carData => (
      <div style={{ float: "left", width: "50%", background: "white" }}>
        <CarCard data={carData} />
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
            <h1>CarCard</h1>
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
