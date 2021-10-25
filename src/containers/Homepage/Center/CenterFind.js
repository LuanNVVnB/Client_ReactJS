import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./CenterFind.scss";
import * as actions from "../../../store/actions";

class CenterFind extends Component {
  render() {
    return (
      <Fragment>
        <div className="CenterFind">
          <div className="Center-description">
            <div className=" description-name">
              <h2>Find local specialists who can take your insurance</h2>
              <h5>
                we can help you find available vaccine appointments near you or
                notify you when availability opens up.
              </h5>
            </div>
            <input
              className="Enter_your "
              type="text"
              placeholder="Enter your"
            ></input>
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div className="Img_description">
            <img src="https://secureservercdn.net/160.153.138.219/i1z.121.myftpupload.com/wp-content/uploads/2020/02/female-doctor-long-683x1024.jpg"></img>
            <div className="chat_description1"></div>
            <div className="chat_description2"></div>
            <div className="chat_description3"></div>
          </div>
        </div>
        <div className="Fastest">
          <div className="fastname_min">FASTETST SOLUTION</div>
          <div className="fastname_max">4 easy steps to get your solution</div>
          <div className="Fastest-item">
            <div className="item">
              <div className="icon">
                <i class="fas fa-user"></i>
              </div>
              <div className="name-item">Search doctor</div>
              <div className="containt-item">
                we're here to help whenever you feel ill,but keeping you healthy
                is our better priority.
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="fas fa-user"></i>

              </div>
              <div className="name-item">Check doctor Profile</div>
              <div className="containt-item">
                we're here to help you find avaliable vaccine appointments near you
                or notify you when availability.
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="far fa-calendar-alt"></i>
              </div>
              <div className="name-item">Schedule Appointment</div>
              <div className="containt-item">
                From seasional allergies to bum identification and
                treatments. we have the rescources.
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="far fa-lightbulb"></i>
              </div>
              <div className="name-item">Get your solution</div>
              <div className="containt-item">
                we're can help you find availible vaccine appointments near
                you or notify you when availability.
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CenterFind);
