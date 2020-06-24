import React, {Component} from "react"
import Filter from "./Filter"
import Sort from "./Sort"

export default class Selection extends Component {
    render() {
        return(
            <div className="ui grid container">
            <Filter handleFilter={this.props.handleFilter} /><Sort handleSort={this.props.handleSort}/>
            
            </div>
        )
    }
}