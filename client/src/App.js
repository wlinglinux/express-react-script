import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Client from './Client';
import {Button} from 'reactstrap';

class App extends Component {
  state = {
    index:1,
    items:[{
      "name": "math",
      "type": "math"
    },
    {
      "name": "asp.net",
      "type": "c#"
    }]
  }

  getData = () => {
    Client.search((datas) => {
      console.log(this.state.index++);
      this.setState({
        items: datas,
      });
    });
  }

  render() {
    const { items, index } = this.state;
    const lis = items.map((item, idx) => {
      return <li key={idx}><Button color="primary">{item.name}</Button></li>
    });

    return (
      <div className="App">
        <Helmet title="You Are Doing Great" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button color="danger" onClick={this.getData}>ClickMe</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="">
          {lis}
        </ul>
      </div>
    );
  }
}

export default App;
