import React from "react";
import {compose,composeAll} from "react-komposer";

class MyComponent extends React.Component {
  _onClick() {
    this.props.onUpdate();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.c1Data !== this.props.c1Data;
  }

  render() {
    console.log("MyComponent rendering: %d",this.props.c1Data);
    return (
      <div>
        <div>{this.props.c1Data}</div>
        <button onClick={this._onClick.bind(this)}>update</button>
      </div>
    )     
  }
}

MyComponent.propTypes = {
  c1Data: React.PropTypes.number.isRequired
}

function composer1({ c2Data },onData) {
  if (c2Data) {
    console.log("composer1 running, data from c2 is %d",c2Data);  
    setTimeout(function() {
      c2Data++;
      console.log("composer1 ready, sending %d",c2Data);
      onData(null,{ c1Data: c2Data });
    },2000);
  }
}

function composer2({ appData },onData) {
  console.log("composer2 running, data from app is %d",appData);
  onData(null,{c2Data: null});
  setTimeout(function() {
    appData++;
    console.log("composer2 ready, sending %d",appData);
    onData(null,{c2Data: appData });
  },2000);
}

export default composeAll(
  compose(composer1),
  compose(composer2)
)(MyComponent);
