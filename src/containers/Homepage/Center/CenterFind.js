import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./CenterFind.scss";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";

class CenterFind extends Component {
  render() {
    return (
      <Fragment>
        <div className="CenterFind">
          <div className="Center-description">
            <div className=" description-name">
              <h2>
                <FormattedMessage id={"center.descriptionname1"} />
              </h2>
              <h5>
                <FormattedMessage id={"center.descriptionname2"} />
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
          <div className="fastname_min">
            <FormattedMessage id={"center.fastest"} />
          </div>
          <div className="fastname_max">
            <FormattedMessage id={"center.easy-steps"} />
          </div>
          <div className="Fastest-item">
            <div className="item">
              <div className="icon">
                <i class="fas fa-user"></i>
              </div>
              <div className="name-item">
                <FormattedMessage id={"center.search"} />
              </div>
              <div className="containt-item">
                <FormattedMessage id={"center.search-contant"} />
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="fas fa-user"></i>
              </div>
              <div className="name-item">
                <FormattedMessage id={"center.check"} />
              </div>
              <div className="containt-item">
                <FormattedMessage id={"center.check-contant"} />
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="far fa-calendar-alt"></i>
              </div>
              <div className="name-item">
                <FormattedMessage id={"center.schedule"} />
              </div>
              <div className="containt-item">
                <FormattedMessage id={"center.schedule-contant"} />
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i class="far fa-lightbulb"></i>
              </div>
              <div className="name-item">
                <FormattedMessage id={"center.get-solution"} />
              </div>
              <div className="containt-item">
                <FormattedMessage id={"center.get-solution-contant"} />
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
