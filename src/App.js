import React, { Component } from 'react';
import './App.css';
import './bootstrap/bootstrap.css';
import CoreComponant from './components/TodoApp/CoreComponant.jsx'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <CoreComponant/>
      </div>
    );
  }
}



export default App;