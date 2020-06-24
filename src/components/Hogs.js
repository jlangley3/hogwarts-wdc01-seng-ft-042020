import React, {Component} from "react"


export default class Hogs extends Component {



    sanitizeHogsImg = (name) => {
      let newName =  name.toLowerCase().replace(/ /g,"_");
      return newName
      debugger;
    }

    render() {
        let pigImage = require(`../hog-imgs/${this.sanitizeHogsImg(this.props.hog.name)}.jpg`)
        return(
            <div>
                {this.props.hog.name}
                {this.props.hog.key}
                <img src={pigImage}/>                
                </div>
        )
    }
}