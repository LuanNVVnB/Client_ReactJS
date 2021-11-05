import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

// import { Button, Modal } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class DoctorModel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  toggle = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <Fragment>
        <Modal
          isOpen={this.props.isOpen}
          toggle={() => {
            this.toggle();
          }}
          size="lg"
        >
          <ModalHeader
            toggle={() => {
              this.toggle();
            }}
          ></ModalHeader>
          <ModalBody>
            <div className="information-doctor">
              <div className="avatar">{/* <img src={} /> */}</div>
              <div className="imformation">
                <div className="name-doctor"></div>
                <div className="kill"></div>
                <div className="specalty"></div>
                <div className="desription-doctor"></div>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorModel);
