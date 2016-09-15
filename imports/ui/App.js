import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import MyComponent from "./my-component";

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "hello"
    };
  }

  _onUpdate(val) {
    this.setState({data: val});
  }

  render() {
    return (
      <div className="container">
        <MyComponent data={this.state.data} onUpdate={this._onUpdate.bind(this)} />
      </div>
    );
  }
}

App.propTypes = {
};

export default App;