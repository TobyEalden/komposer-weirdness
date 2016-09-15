import React from "react";
import {compose,composeAll} from "react-komposer";

class MyComponent extends React.Component {
  _onClick() {
    this.props.onUpdate("world");
  }

  render() {
    console.log("MyComponent:render");
    return (
      <div>
        <div>{this.props.data}</div>
        <button onClick={this._onClick.bind(this)}>update</button>
      </div>
    )     
  }
}

function composer1(props,onData) {
  console.log("composer1");
  setTimeout(function() {
    console.log("composer1 ready");
    onData(null,{c1Data: "bar"});
  },2000);
}

function composer2(props,onData) {
  console.log("composer2");
  setTimeout(function() {
    console.log("composer2 ready");
    onData(null,{c2Data: "foo"});
  },2000);
}

export default composeAll(
  compose(composer1),
  compose(composer2)
)(MyComponent);
