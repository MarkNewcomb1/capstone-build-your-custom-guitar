import React, { Component } from 'react';
import Guitar from './Components/Guitar';
import Form from './Components/Form';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'strat',
      hand: 'right',
      paint: 'white',
      hardware: false,
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
  render() {
    return (
      <div>
        <Guitar {...this.state} />
        <Form setBody={this.setBody} setHand={this.setHand} setPaint={this.setPaint} />
      </div>
    );
  }
}

export default App;