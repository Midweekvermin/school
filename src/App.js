import './App.css';
import React from 'react';
import Home from './Home.js';
import Cat from './Cat.js';
import Dog from './Dog.js';
import Fish from './Fish.js';
import Contact from './Contact.js'

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      route: 'Home'
    }
  }
  routing = {
    homes: () =>{
      this.setState({route:'Home'});
     },
    cats:  () => {
   this.setState({route:'Cat'});
    },
    dogs: () => {
     this.setState({route:'Dog'});
    },
   fish: () =>{
    this.setState({route:'Fish'});
   },
 
   contact: () =>{
    this.setState({route:'Contact'});
   },
   
     }


  render () {
    return (
      this.state.route === 'Home' ? <Home routes={this.routing}/> : this.state.route === 'Cat' ?
       <Cat routes={this.routing} /> : this.state.route === 'Dog'? <Dog routes={this.routing}/>: this.state.route === 'Fish'? <Fish routes={this.routing}/>:
       this.state.route === 'Contact'? <Contact routes={this.routing}/>: null
    );
  }
}

export default App;
