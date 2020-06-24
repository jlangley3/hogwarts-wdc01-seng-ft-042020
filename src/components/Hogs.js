import React, {Component} from "react"


export default class Hogs extends Component {


    toggleDetails = (e) => {
        // debugger
        let div = e.currentTarget.querySelector(`div`)

        if (div.style.display === "none") {
            div.style.display = 'inherit'
        } else {
            div.style.display = 'none'
        }

        
    }

    sanitizeHogsImg = (name) => {
      let newName =  name.toLowerCase().replace(/ /g,"_");
      return newName
    }

    render() {
        let pigImage = require(`../hog-imgs/${this.sanitizeHogsImg(this.props.hog.name)}.jpg`)
        return(
            <div className = 'ui eight wide column' onClick={this.toggleDetails} name="card">
                <h2>
                    {this.props.hog.name}
                </h2>
                {this.props.hog.key}
                < img src={pigImage} alt={`${this.props.hog.name} the pig`}/>    
                <div id={this.props.hogId} style={{display: 'none'}}>
                    <h4>Details</h4>
                    <p>Grease: {this.props.hog.greased ? "Greasey!" : "Squeeky Clean"}</p>   
                    <p>Specialty: { this.props.hog.specialty }</p>   
                    <p>Weight: { this.props.hog.weight } tons</p>   
                    <p>Medal: { this.props.hog["highest medal achieved"] }</p>   
                </div>            
            </div>
        )
    }
}