import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
// import { updateUserService } from "../../services/userService";
import _ from "lodash";

// import { Button, Modal } from "reactstrap";
import {
  FormGroup,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
class API_UserModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phonenumber: "",
      gender: true,
      roleId: "",
    };
  }

  componentDidMount() {
    let user = this.props.UserUpdate;

    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: user.password,
        firstname: user.firstName,
        lastname: user.lastName,
        address: user.address,
        phonenumber: user.phonenumber,
        gender: user.gender,
        roleId: user.roleId,
      });
    }
  }
  toggle = () => {
    this.props.toggleModal();
  };
  handleOnchangeInput = (event, id) => {
    let copystate = { ...this.state };
    copystate[id] = event.target.value;
    this.setState({
      ...copystate,
    });
  };
  checkValideInput = () => {
    let valid = true;
    let arrInput = [
      "email",
      "password",
      "firstname",
      "lastname",
      "address",
      "phonenumber",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        alert("Missing parameter: " + arrInput[i]);
        valid = false;
        break;
      }
    }
    return valid;
  };

  handleUpdateUserModal = async () => {
    try {
      let valide = this.checkValideInput();
      if (valide === true) {
        // this.props.createNewUser(this.state);
        this.props.updateOneUser(this.state);
      }

      // console.log("errovode: ", response.deleteuser.errcode);
      // if (response && response.d.errcode !== 0) {
      //     // alert(response.message);
      //     alert(response.deleteuser.message);

      // } else {
      //     alert("delete user succesfull")
      //     await this.getAllUserService();
      // }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Fragment>
        <Modal
          isOpen={this.props.isOpen}
          toggle={() => {
            this.toggle();
          }}
          className={"lsakdfja"}
          size="lg"
        >
          <ModalHeader
            toggle={() => {
              this.toggle();
            }}
          >
            Create New User
          </ModalHeader>
          <ModalBody>
            {/* <form action="put_userById" method="POST"> */}
            <div className="form-group">
              <label for="inputAddress">email</label>
              <input
                type="text"
                style={{ color: "blueviolet;" }}
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "email");
                }}
              ></input>
            </div>
            <div className="form-group">
              <label for="inputAddress">password</label>
              <input
                type="text"
                style={{ color: "blueviolet;" }}
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={(event) => {
                  this.handleOnchangeInput(event, "password");
                }}
              ></input>
            </div>

            <div className="form-group">
              <label for="inputAddress">Firstname</label>
              <input
                type="text"
                style={{ color: "blueviolet;" }}
                className="form-control"
                name="firstname"
                value={this.state.firstname}
                placeholder="fisrt name"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "firstname");
                }}
              ></input>
            </div>

            <div className="form-group">
              <label for="inputAddress2">Lastname</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                style={{ color: "blueviolet;" }}
                value={this.state.lastname}
                placeholder="last name"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "lastname");
                }}
              ></input>
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                style={{ color: "blueviolet;" }}
                value={this.state.address}
                placeholder="Can Tho St"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "address");
                }}
              ></input>
            </div>

            <Row form style={{ display: "flex" }}>
              <Col md={6}>
                <FormGroup>
                  <label for="inputCity">phonenumber</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phonenumber"
                    style={{ color: "blueviolet;" }}
                    value={this.state.phonenumber}
                    onChange={(event) => {
                      this.handleOnchangeInput(event, "phonenumber");
                    }}
                  ></input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <label for="inputState">gender</label>
                  <select
                    class="form-select"
                    name="gander"
                    className="form-control"
                    style={{ color: "blueviolet;" }}
                    value={this.state.gender}
                    onChange={(event) => {
                      this.handleOnchangeInput(event, "gender");
                    }}
                  >
                    <option selected value="M">
                      malde
                    </option>
                    <option value="F">fmalde</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <label for="inputZip">Role</label>
                  <select
                    class="form-select"
                    name="roleId"
                    className="form-control"
                    style={{ color: "blueviolet;" }}
                    value={this.state.roleId}
                    onChange={(event) => {
                      this.handleOnchangeInput(event, "roleId");
                    }}
                  >
                    <option selected value="doctor">
                      doctor
                    </option>
                    <option value="patient">patient</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>

            {/* /* <button type="submit" className="btn btn-primary">
                Update
            //   </button> */}
          </ModalBody>
          <ModalFooter>
            <Button
              style={{ color: "primary" }}
              onClick={() => {
                this.handleUpdateUserModal();
              }}
            >
              Update User
            </Button>{" "}
            <Button
              style={{ color: "secondary" }}
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
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

export default connect(mapStateToProps, mapDispatchToProps)(API_UserModel);
