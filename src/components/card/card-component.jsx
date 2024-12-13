import { Component } from "react";
import './card-component.css'

class Card extends Component{
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        const {name, id, email} = this.props.monster
        return <div key={id} className="card-container">
              <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
              <h2>{name}</h2>
              <p>{email}</p>
              </div>
    }
}

export default Card