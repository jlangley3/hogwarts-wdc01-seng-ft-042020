import React, { Component } from "react";
import Hogs from "./Hogs"

export default class HogsContainer extends React.Component {


  render() {
    return (
      <div>
        <h1>This is Our Hogs Container</h1>
        {this.props.hogsList.map( (hog, index) => {
          return <Hogs hog={hog} key={index} />
        }
        )}
        
      </div>
    );
  }
}


