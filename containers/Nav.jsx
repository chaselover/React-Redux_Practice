import { connect } from "react-redux";
import Nav from "../components/Nav";

// 1.목록 정보를 보여주는 props, 목록을 전달할 props
export default connect(
  function (state) {
    return { data: state.contents };
  },
  function (dispatch) {
    return {
      onClick: function (id) {
        dispatch({ type: "READ", id: id });
      },
    };
  }
)(Nav);
