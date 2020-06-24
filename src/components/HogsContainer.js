import React, { Component } from "react";
import Hogs from "./Hogs"

export default class HogsContainer extends React.Component {


  render() {
    return (
      <div className = 'ui grid container'>
        <h1>Hogs Container</h1>
        {this.props.hogsList.map( (hog, index) => {
          return <Hogs hogId={index+1} hog={hog} key={index} />
        }
        )}
        
      </div>
    );
  }
}


