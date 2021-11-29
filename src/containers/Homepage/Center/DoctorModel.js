import React, { Component, Fragment } from "react";
import "./DoctorModel.scss";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import { chengeLanguageApp } from "../../../store/actions";

// import { Button, Modal } from "reactstrap";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

class DoctorModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: [],
      arrDays: [],
      isSchedule: false,
      ismoney: false,
    };
  }
  componentDidMount() {
    let { language } = this.props;
    this.DaysSelect(language);
    this.setState({
      detailDoctor: this.props.detailDoctor,
      isSchedule: false,
    });
  }
  toggle = () => {
    this.props.toggleModal();
  };
  componentDidUpdate(prevProps) {
    if (prevProps.detailDoctor.id != this.props.detailDoctor.id) {
      this.props.schedule = [];
    }
  }
  DaysSelect = (language) => {
    let arrDays = [];
    for (let i = 0; i < 7; i++) {
      let day = {};
      if (language === LANGUAGE.VI) {
        day.label = moment(new Date())
          .add(i, "days")
          .format("dddd(DD/MM/YYYY)");
      } else
        day.label = moment(new Date())
          .add(i, "days")
          .format("dddd(MM/DD/YYYY)");
      // day.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      day.value = moment(new Date()).add(i, "days").format("YYYY-MM-DD");
      arrDays.push(day);
    }
    this.setState({
      arrDays: arrDays,
    });
  };
  handleselectDays = async (event) => {
    console.log(event.target.value);
    await this.props.fetchAllscheduleStart(
      this.props.detailDoctor.id,
      event.target.value
    );
    this.setState({
      isSchedule: true,
    });
  };
  handleBooking = () => {};
  render() {
    let Doctor = this.state.detailDoctor;
    const detailDoctor = Doctor.Detail ? Doctor.Detail : "";
    let { arrDays, isSchedule } = this.state;
    let { schedule } = this.props;

    return (
      <Fragment>
        <Modal
          isOpen={this.props.isOpen}
          detailDoctor={this.props.detailDoctor}
          toggle={() => {
            this.toggle();
          }}
          size="xl"
        >
          <ModalBody>
            <div className="information-doctor">
              <div className="avatar">
                <img src={Doctor.image} />
              </div>
              <div className="information">
                <div className="information-item">
                  <div className="name-doctor">
                    <div className="title-name">
                      <b>
                        <FormattedMessage id="center.name-doctor" />
                        :_
                      </b>
                    </div>
                    <div className="center-name">
                      {this.props.language === LANGUAGE.VI
                        ? Doctor.firstName + Doctor.lastName
                        : Doctor.lastName + Doctor.firstName}
                    </div>
                  </div>
                  <div className="money">
                    <NumberFormat
                      value={250000}
                      className="foo"
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      renderText={(value, props) => (
                        <div {...props}>{value}</div>
                      )}
                    />
                  </div>
                </div>
                <div className="name-specialty">
                  Benh vien Da khoa Trung Uong An Giang
                </div>
                <div className="description-doctor">
                  {detailDoctor.description}.{" "}
                  <Link
                    to={{
                      pathname: `/doctor`,
                      state: {
                        doctor: Doctor,
                      },
                    }}
                  >
                    About
                  </Link>
                </div>
                <div className="kill">
                  <div className="kill-item">
                    <div className="kill-name">
                      Expert {detailDoctor.expert} %
                    </div>
                    <div
                      className="kill-content"
                      style={{
                        width: "100px",
                        background: "#000",
                        height: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        className="kill-display"
                        style={{
                          position: "absolute",
                          width: `${detailDoctor.expert}px`,
                          background: "red",
                          height: "10px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="kill-item">
                    <div className="kill-name">
                      Effective {detailDoctor.effective} %
                    </div>
                    <div
                      className="kill-content"
                      style={{
                        width: "100px",
                        background: "#000",
                        height: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        className="kill-display"
                        style={{
                          position: "absolute",
                          width: `${detailDoctor.effective}px`,
                          background: "red",
                          height: "10px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="specialty"></div>
                {/* <div
                  className="desription-doctor"
                  dangerouslySetInnerHTML={{ __html: detailDoctor }}
                ></div> */}

                <div className="center">
                  <div className="select-day">
                    <div className="title-select">You will select</div>
                    <select onChange={(event) => this.handleselectDays(event)}>
                      {arrDays &&
                        arrDays.length > 0 &&
                        arrDays.map((item, index) => {
                          return (
                            <option value={item.value} key={index}>
                              {item.label}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="booking">
                    {schedule && schedule.length > 0 ? (
                      schedule.map((item, index) => {
                        if (item.timeTypeData && isSchedule == true)
                          return (
                            <Button
                              style={{
                                paddingBottom: "10px !important",
                                height: "40px",
                                marginBottom: "10px !important",
                              }}
                              className={
                                "btn-times " +
                                (item.isSelected == true ? "active" : "")
                              }
                              key={index}
                              variant="outline-success"
                              onClick={() => {
                                this.handeleOnClickBooking({ item });
                              }}
                            >
                              {this.props.language === LANGUAGE.VI
                                ? item.timeTypeData.valueVi
                                : item.timeTypeData.valueEn}
                            </Button>
                          );
                      })
                    ) : (
                      <div>chua co lich kham benh</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Link
              to={{
                pathname: `/booking`,
                state: {
                  doctor: Doctor,
                },
              }}
            >
              Booking
            </Link>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    schedule: state.admin.schedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllscheduleStart: (doctorId, date) =>
      dispatch(actions.fetchAllscheduleStart(doctorId, date)),
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorModel);
