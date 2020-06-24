import React, {Component} from "react"


export default class Sort extends Component {
    render() {
        return(
            <div className="ui eight wide column"><span>Sort:  </span>
            <label htmlFor="name">Name
            <input id="name" name="sort_by" type="radio" value="name" onChange={this.props.handleSort}/></label>
            <label htmlFor="weight">Weight
            <input id="weight" name="sort_by" type="radio" value="weight" onChange={this.props.handleSort}/></label>
            </div>
        )
    }
}