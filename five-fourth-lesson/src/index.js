import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
// import axios from 'axios';
import Home from "./home";
import List from "./list";

class App extends Component {

  // componentDidMount() {
  //   axios.get('/react/api/header.json')
  //     .then((res) => {
  //       console.log(res);
  //     })
  // }

  render() {
    // return <div>Hello Word</div>
    return (

      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/list" component={List} />
        </div>
      </BrowserRouter>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));