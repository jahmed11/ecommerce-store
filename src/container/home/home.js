import React, { Component } from "react";
import SaleSlider from "../../component/slider/slider";
import Video from '../../component/video/video';
import "./home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="_home">
        <div style={{textAlign:'center'}}>
     <Video/>
        </div>
        <div style={{margin:'0 auto'}}>
          <SaleSlider />
        </div>
      </div>
    );
  }
}

export default Home;
