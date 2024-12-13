import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component';
import Card from './components/card/card-component';
import SearchBox from './components/search-box/search-box-component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters : [],
      displayMonsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(x => x.json())
    .then(y => this.setState(()=>{
      return {monsters: y, displayMonsters: y}
    }, ()=>{
      console.log(this.state.monsters)
    }))
  }


  onSearchChange = (event) => {
    if(event.target.value.length !== 0){
      let filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(event.target.value.toLowerCase()) )
      this.setState({displayMonsters: filteredMonsters})
    }else{
      this.setState({displayMonsters: this.state.monsters})
    }
  }

  render(){

    const {onSearchChange} = this
    const {displayMonsters} = this.state

    return (
      <div className="App">
        <h1 classname="app-title eater-regular">Monsters Rolodex</h1>
        <SearchBox onSearchChange={onSearchChange}></SearchBox>
        <CardList displayMonsters={displayMonsters}></CardList>

      </div>
    );
  }

}

export default App;









