import React , {Component} from 'react';
import './App.css'
import logo from './logo.svg';

import myExportDefault, {add, subtract, multiply} from '../utils';
export default class App extends Component {
  state = {
    vallue: 0,
    calc: ''
  }
  onAdd = () => {
    console.log('onAdd');
    this.setState({
      calc: '2 + 2 =',
      value: add(2, 2)
    });
  }
  onSubtract = () => {
    console.log('onSubtract');
    this.setState({
      calc: '2 - 2 =',
      value: subtract(2, 2)
    });
  }
  onMultiply = () => {
    console.log('onMultiply');
    this.setState({
      calc: '2 * 2 =',
      value: multiply(2, 2)
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className = 'App-intro'>
          {this.state.calc}{this.state.value}
        </p>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onSubtract}>Subtract</button>
        <button onClick={this.onMultiply}>Multiply</button>
      </div>
    )
  }
}