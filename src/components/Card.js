import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class Desktop extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <img src={this.props.data.media[0].url} alt="Logo" />

        <h2>{this.props.data.media[0].url}</h2>
        <h3>{this.props.data.id}</h3>
        <h3>{this.props.data.id}</h3> */}

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"." + this.props.data.media[0].url} />
          <Card.Body>
            <Card.Title>{this.props.data.id}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Desktop;
