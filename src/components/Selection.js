import React, {Component} from "react"
import Filter from "./Filter"
import Sort from "./Sort"

export default class Selection extends Component {
    render() {
        return(
            <div>
            <Filter />
            <Sort />
            </div>
        )
    }
}