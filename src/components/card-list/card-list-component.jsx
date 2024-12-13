import { Component } from "react";
import './card-list-styles.css'
import Card from "../card/card-component";

class CardList extends Component{

    constructor(){
        super();
        
        this.state={

        }

    }

    render(){
        const {displayMonsters} = this.props

        return <div className="card-list">
                    {
          displayMonsters.map((monster) => {
            return <Card key={monster.id} monster={monster}></Card>
          })
        }
        </div>
    }

}

export default CardList




















