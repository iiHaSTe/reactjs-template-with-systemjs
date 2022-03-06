import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    console.clear();
    console.log("woked !!!");
  }

  render() {
    return (
      <div>
        Hi, Mom!
        <div className='alert'>
          <p>this is <span>react</span> template using <label>system js</label></p>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
