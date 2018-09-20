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

  addSubmitEvent = (event) => {
    event.preventDefault();
    return fetch('http://localhost:8000/orders/', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
      .then(resp => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              const err = { errorMessage: data.message };
              throw err;
            });
          }
          const err = { errorMessage: 'Blah' };
          throw err;
        }
        console.log("RESP", resp);
        
        return resp.json();
      })
      .then(json => {
        console.log(json);
      })
  }

  setBody = (body) => {
    this.setState({body});
  }
  setHand = (hand) => {
    this.setState({hand});
  }
  setPaint = (paint) => {
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
        <Form setBody={this.setBody} setHand={this.setHand} setPaint={this.setPaint} setPickguard={this.setPickguard} send={this.addSubmitEvent} />
      </div>
    );
  }
}

export default App;