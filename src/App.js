import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoContainer from './components/to-do-container';

class App extends Component {
  constructor(){
    super();
    this.state={
      update:false
    }
    this.clearList = this.clearList.bind(this);
  }
  clearList(){
    localStorage.removeItem("to-do-list");
    this.setState(preState=>({update:!preState.update}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My To-Do App</h1>
          <button className= "clear-list-button" onClick={this.clearList}>clear</button>
        </header>
        <ToDoContainer update={this.state.update}/>
      </div>
    );
  }
}

export default App;
