import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="#welcome"
            onClick={function () {
              this.props.onClick();
            }.bind(this)}
          >
            WEB
          </a>
        </h1>
        World Wide WEB
      </header>
    );
  }
}

// Header를 connect함수를 통해 redux를 위한 가짜 component로 wrapping해서 걔를 export함
// header를 클릭했을시 변경되는 event가 필요함.
// redux에 의존하는, component를 핸들링하는 코드
export default connect(null, function (dispatch) {
  return {
    // header의 event인 onclick함수를 정의함.dispatch로 action을 줌
    onClick: function () {
      dispatch({ type: "WELCOME" });
    },
  };
})(Header);
