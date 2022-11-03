import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Hello from './components/Hello';
import MyComponent from './components/Welcome';

class App extends Component{
  render() {
    return(
    <div className="App">

      {/* component as the custom html tag */}
     {/* <Greet/>

     <MyComponent/> */}
     <Hello/>
     
    </div>
  );
}
}

export default App;
