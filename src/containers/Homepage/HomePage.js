import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import Home_header from "./Home_header";
import "./HomePage.scss";
import CenterFind from "./Center/CenterFind";
import CenterSession from "./Center/CenterSession";
import Booking from "./Center/Booking";
import Footer from "./Center/Footer";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("booking object: ", this.props.doctorBook);
    return (
      <Fragment>
        <Home_header />
        <div className="body-homapage">
          {this.props.bookingAction === true ? (
            <Booking />
          ) : (
            <>
              <CenterFind />
              <CenterSession />
              <Footer />
            </>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    bookingAction: state.user.bookingAction,
    doctorBook: state.user.doctorBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
