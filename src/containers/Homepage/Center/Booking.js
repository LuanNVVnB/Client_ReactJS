import "./Booking.scss";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./CenterFind.scss";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { Button } from "react-bootstrap";

export class Booking extends Component {
  render() {
    return (
      <Fragment>
        <div className="appointment">
          <div className="form-booking">
            <div className="form-booking_center">
              <div className="booking-title">
                Let's protect yourself and those around you by vaccinating
              </div>
              <div className="apeticaty">
                <label>Patient's Full Name</label>
                <input type="text" value></input>
              </div>
              <div className="apeticaty">
                <label>Patient's Email</label>
                <input type="email" value></input>
              </div>
              <div className="apeticaty">
                <label>Date Appointment</label>
                <input type="text" value></input>
                <label>Time Appointment</label>
                <input type="text" value></input>
              </div>

              <div className="apeticaty">
                <label>Mobile Number</label>
                <input type="text" value></input>
              </div>
              <div className="apeticaty">
                <label>Patient's Address</label>
                <input type="text" value></input>
              </div>
              <Button
                style={{
                  paddingBottom: "10px !important",
                  height: "40px",
                  width: "82%",
                  margin: "10px 1% 10px 17%",
                }}
                variant="outline-info"
              >
                Submit
              </Button>
            </div>
          </div>
          <footer>
            <p>
              Created with <i className="fa fa-heart"></i> by
              <a target="_blank" href="https://florin-pop.com">
                Florin Pop
              </a>
              - Read how I created this and how you can join the challenge
              <a
                target="_blank"
                href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
              >
                here
              </a>
              .
            </p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
