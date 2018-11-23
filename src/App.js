import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
class App extends Component {

  componentDidMount() {
  }
  async get() {
    console.log('calling api...');
    const data = await API.get('api64b390cb', '/items/lala');
    console.log({ data });
  }
  async put() {
    console.log('calling api...');
    const data = await API.put('api64b390cb', '/items', {
      body: {
        id: "elorzafe",
        content: "my content"
      }
    });
    console.log({ data });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.get}>get</button>
        <button onClick={this.put}>put</button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
