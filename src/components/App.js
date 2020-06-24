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
    hogs: hogs,
    filter: "",
    sortBy: ""
  }
}

handleFilter = (event) => {
  if(event.target.value === "greasy"){
    let filteredArray = this.state.hogs.filter(hog => {
      return hog.greased
    })
 this.setState({
   filter: event.target.value,
   hogs: filteredArray
 })
}else {
  this.setState({
    filter: event.target.value,
    hogs: hogs
  })
}
}

handleSort = (event) => {
  if(event.target.value === "name"){
   this.setState({hogs: this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)})
  }else if(event.target.value === "weight") {
    this.setState({hogs: this.state.hogs.sort((a,b) => (a.weight < b.weight) ? 1 : -1)})
  }else {
    this.setState({
      hogs: hogs
    })
  }
  
    
  
}
  
  render() {

    return (
      <div className="App">
        <Nav />
        <Selection handleFilter={this.handleFilter} handleSort={this.handleSort}/>
        <HogsContainer hogsList={this.state.hogs} />
      </div>
    );
  }
}

export default App;
