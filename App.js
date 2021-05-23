import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from "./containers/Control";
import CreateContainer from "./containers/Create";
import UpdateContainer from "./containers/Update";

import { connect } from "react-redux";
class App extends Component {
  render() {
    var article = null;
    if (this.props.mode === "READ") {
      article = <ReadContainer></ReadContainer>;
    } else if (this.props.mode === "CREATE") {
      article = <CreateContainer></CreateContainer>;
    } else if (this.props.mode === "WELCOME") {
      article = <ReadContainer></ReadContainer>;
    } else if (this.props.mode === "UPDATE") {
      article = <UpdateContainer></UpdateContainer>;
    }
    return (
      <div className="App">
        <Header></Header>

        <NavContainer></NavContainer>

        <ControlContainer></ControlContainer>

        {article}
      </div>
    );
  }
}

// 바로 App을 export시키는게 아니라 mode값을 받는 props를 추가.
export default connect(function (state) {
  return {
    mode: state.mode,
  };
})(App);
