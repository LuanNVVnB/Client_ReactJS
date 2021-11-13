import React, { Component, Fragment } from "react";
import "./DoctorModel.scss";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import { chengeLanguageApp } from "../../../store/actions";

// import { Button, Modal } from "reactstrap";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class DoctorModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: [],
    };
  }
  componentDidMount() {
    this.setState({
      detailDoctor: this.props.detailDoctor,
    });
  }
  toggle = () => {
    this.props.toggleModal();
  };

  render() {
    let Doctor = this.state.detailDoctor;
    const detailDoctor = Doctor.Detail ? Doctor.Detail.contentHTML : "";

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
              <div className="imformation">
                <div className="name-doctor">
                  <b>
                    <FormattedMessage id="name-doctor" />:
                    {this.props.language === LANGUAGE.VI
                      ? Doctor.firstName + Doctor.lastName
                      : Doctor.lastName + Doctor.firstName}
                  </b>
                </div>
                <div className="kill"></div>
                <div className="specalty"></div>
                <div
                  className="desription-doctor"
                  dangerouslySetInnerHTML={{ __html: detailDoctor }}
                ></div>
                <div className="center"></div>
                <Button></Button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.handleAddNewUser();
              }}
            >
              Booking
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorModel);
