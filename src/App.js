import React, { Component } from 'react';
import Guitar from './Components/Guitar';
import Form from './Components/Form';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'strat',
      hand: '',
      paint: '',
      hardware: false,
      formProgress: 1
    };
  }
  setBody = (body) => {
    this.setState({body});
  }
  render() {
    return (
      <div>
        <Guitar {...this.state} />
        <Form setBody={this.setBody} />
      </div>
    );
  }
}

export default App;