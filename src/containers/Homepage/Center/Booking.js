import "./Booking.scss";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./CenterFind.scss";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { Button } from "react-bootstrap";

export class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      date: "",
      time: "",
      phoneNumber: "",
      address: "",
    };
  }
  handleOnchangeInput = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.clientInfo !== this.props.clientInfo) {
      let clientInfo = this.props.clientInfo;
      this.setState({
        fullName: clientInfo.firstName + " " + clientInfo.lastName,
        email: clientInfo.email,
        phoneNumber: clientInfo.phonenumber,
        address: clientInfo.address,
      });
    }
  }
  render() {
    let { doctorBook, clientInfo } = this.props;
    let { fullName, email, date, time, phoneNumber, address } = this.state;
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
                <input
                  onChange={(event) => this.handleOnchangeInput(event)}
                  type="text"
                  value={fullName}
                  placeholder={clientInfo.firstName + " " + clientInfo.lastName}
                  name="fullName"
                ></input>
              </div>
              <div className="apeticaty">
                <label>Patient's Email</label>
                <input
                  onChange={() => this.handleOnchangeInput()}
                  type="email"
                  value={email}
                  placeholder={clientInfo.email}
                  name="email"
                ></input>
              </div>
              <div className="apeticaty">
                <label>Date Appointment</label>
                <input
                  onChange={() => this.handleOnchangeInput()}
                  type="text"
                  value={date}
                  placeholder={doctorBook.date}
                  name="date"
                ></input>
                <label>Time Appointment</label>
                <input
                  onChange={() => this.handleOnchangeInput()}
                  type="text"
                  value={time}
                  placeholder={doctorBook.time}
                  name="time"
                ></input>
              </div>

              <div className="apeticaty">
                <label>Mobile Number</label>
                <input
                  onChange={() => this.handleOnchangeInput()}
                  type="text"
                  value={phoneNumber}
                  placeholder="Phone Number"
                  name="phoneNumber"
                ></input>
              </div>
              <div className="apeticaty">
                <label>Patient's Address</label>
                <input
                  onChange={() => this.handleOnchangeInput()}
                  type="text"
                  value={address}
                  placeholder="Address"
                  name="address"
                ></input>
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
    bookingAction: state.user.bookingAction,
    doctorBook: state.user.doctorBook,
    clientInfo: state.user.clientInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
