import React, { Component } from "react";
import { getDataById } from "../api";
// import bk from "../../images/bk.jpg";
// import "../style.scss";

export class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      dataById: null
    };
  }
  
  componentDidMount() {
    getDataById(this.props.data.id, data => {
      this.setState({
        dataById: JSON.parse(data)
      });
    });
  }

  render() {
    const path = this.props.data.media[0].url;
    const imageStyles={
      width: '100%',
      height: '170px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: "url(" +  path  + ")"
    }
    console.log("inside this props data", this.props.data.media[0].url);
    if (this.state.dataById) {
      return (
        <div className="divOnHover">
          <div id="carImg" style={{ width: "18rem", height: "50vh" }}>
            <div style={imageStyles}></div>

            <div
              style={{ margin: "3vh", color: "#282828", textAlign: "center" }}
            >
              <h4
                style={{
                  borderTop: "5px solid #282828",
                  borderBottom: "5px solid #282828"
                }}
              >
                Vehicle Nameee
              </h4>
            </div>
            <div>
              <p style={{ color: "#282828", textAlign: "center" }}>
                {this.state.dataById.price}
              </p>
              <p style={{ color: "#282828", textAlign: "center" }}>
                {this.state.dataById.description}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div>loading...</div>;
  }
}

export default Desktop;
