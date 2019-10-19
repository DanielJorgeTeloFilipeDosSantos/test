import React, { Component } from "react";
import { getDataById } from "../api";
// import xe from "./images/xe_k17.jpg";
// import "../style.scss";

export class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      dataById: null
    };
  }
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

  // thirdTry() {
  //   var imageUrl = "https://i.stack.imgur.com/GsDIl.jpg";
  //   loadImage(
  //     imageUrl,
  //     function(img, data) {
  //       if (img.type === "error") {
  //         console.error("Error loading image " + imageUrl);
  //       } else {
  //         document.body.appendChild(img);
  //         console.log("Original image width: ", data.originalWidth);
  //         console.log("Original image height: ", data.originalHeight);
  //       }
  //     },
  //     { maxWidth: 600 }
  //   );
  // }

  // reader.readAsDataURL(xe)

  // previewFile() {
  //   var preview = this.document.querySelector('img');
  //   var file    = this.document.querySelector('input[type=file]').files[0];
  //   var reader  = new FileReader();

  //   reader.addEventListener("load", function () {
  //     preview.src = reader.result;
  //   }, false);

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }

  // convertImageToCanvas() {
  //   var canvas = document.createElement("canvas");
  //   canvas.width = image.width;
  //   canvas.height = image.height;
  //   // canvas.getContext("2d").drawImage(image, 0, 0);
  //   return canvas;
  // }

  componentDidMount() {
    getDataById(this.props.data.id, data => {
      this.setState({
        dataById: JSON.parse(data)
      });
    });
  }

  render() {
    console.log("inside this props data", this.props);
    console.log("inside this props data", this.state.dataById);
    if (this.state.dataById) {
      return (
        <div>
          <div id="carImg" style={{ width: "18rem", height: "45vh" }}>
            {/* {this.putImageAsBackGround()} */}
            {/* <img src={xe} alt="Logo" /> */}
            {/* {this.browserifyLoadImg()} */}
            {/* <img src={xe} alt="Logo" /> */}
            {/* <input type="file" onchange={this.previewFile} />
            <img src="" height="200" alt="Image preview..."/> */}
            {/* {this.convertImageToCanvas()} */}
            <div className="imgBk"></div>

            <div
              style={{ margin: "3vh", color: "#6495ED", textAlign: "center" }}
            >
              <h4
                style={{
                  borderTop: "5px solid #6495ED",
                  borderBottom: "5px solid #6495ED"
                }}
              >
                Vehicle Name
              </h4>
            </div>
            <div>
              <p style={{ color: "#6495ED", textAlign: "center" }}>
                {this.state.dataById.price}
              </p>
              <p style={{ color: "#6495ED", textAlign: "center" }}>
                {this.state.dataById.description}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div>loading..</div>;
  }
}

export default Desktop;
