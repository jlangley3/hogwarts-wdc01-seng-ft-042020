import React, {Component} from "react"

export default class Filter extends Component {
    render() {
        return(
            <div className="ui eight wide column"><span>Grease Filter:  </span>
            <label htmlFor="greasy">ON
            <input id="greasy" name="Greasy" type="radio" value="greasy" onChange={this.props.handleFilter}/></label>
            <label htmlFor="not_greasy">OFF
            <input id="not_greasy" name="Greasy" type="radio" value="not_greasy" onChange={this.props.handleFilter}/></label>
            </div>
        )
    }
}