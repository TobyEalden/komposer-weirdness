import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import MyComponent from "./my-component";

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    var newData = Math.floor(Math.random()*100); 
    this.state = {
      data: newData
    };
    console.log("initial app data: %d", newData);
  }

  _onUpdate() {
    var newData = Math.floor(Math.random()*100);
    console.log("new app data: %d", newData);
    this.setState({data: newData});
  }

  render() {
    return (
      <div className="container">
        <MyComponent appData={this.state.data} onUpdate={this._onUpdate.bind(this)} />
      </div>
    );
  }
}

App.propTypes = {
};

export default App;