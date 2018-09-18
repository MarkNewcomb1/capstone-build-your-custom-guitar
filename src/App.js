import React, { Component } from 'react';
import Guitar from './Components/Guitar';
import Form from './Components/Form';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      hand: '',
      paint: 'white',
      hardware: false,
      pickguard: 'white',
      formProgress: 1
    };
  }
  setBody = (body) => {
    this.setState({body});
  }
  setHand = (hand) => {
    this.setState({hand});
  }
  setPaint = (paint) => {
    console.log(paint);
    
    this.setState({
      paint: paint,
      hardware: true
    });
  }
  setPickguard = (pickguard) => {
    this.setState({pickguard});
  }
  render() {
    return (
      <div className='flex-parent'>
        <Guitar {...this.state} />
        <Form setBody={this.setBody} setHand={this.setHand} setPaint={this.setPaint} />
      </div>
    );
  }
}

export default App;