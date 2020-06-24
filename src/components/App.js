import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import Selection from "./Selection"


class App extends Component {
constructor(){
  super();
  this.state = {
    hogs: hogs
  }
}


  
  render() {
    console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <Selection />
        <HogsContainer hogsList={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
