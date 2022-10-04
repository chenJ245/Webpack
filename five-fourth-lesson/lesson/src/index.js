import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Child from './child/';
// import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
        <div> This is Home Page</div>
        {/* <div>{_.join(['This', 'is', 'App'], ' ')}</div> */}
        {/* <div> This is App </div> */}
        {/* <Child /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));