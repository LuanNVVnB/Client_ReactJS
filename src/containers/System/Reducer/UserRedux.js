import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserRedux.scss";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import UserReduxTable from "./UserReduxTable";

import { Form, Row, Col, Button } from "react-bootstrap";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //code convert
      genderAllcode: [],
      rodeIdAllcode: [],
      positionIdAllcode: [],
      isOpen: false,
      previewImgURL: "",

      //information Create user
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      roleIds: "",
      positionIds: "",
      avatar: "",
      //id user update
      idUpdate: "",
      //actions when changer
      actionChange: false,
      setLoading: false,
    };
  }

  componentDidMount() {
    this.props.getGenderAllcode();
    this.props.getRodeIdAllcode();
    this.props.getPositionIdAllcode();
    this.props.fetchAllUserStart();
  }

  //state change
  componentDidUpdate(prevProps) {
    if (prevProps.genderallcode !== this.props.genderallcode) {
      let arrGenderAll = this.props.genderallcode;

      this.setState({
        genderAllcode: arrGenderAll,
        gender:
          arrGenderAll && arrGenderAll.length > 0 ? arrGenderAll[0].keyMap : "",
      });
    }
    if (prevProps.rodeidallcode !== this.props.rodeidallcode) {
      let arrRodeIdAll = this.props.rodeidallcode;
      this.setState({
        rodeIdAllcode: arrRodeIdAll,
        roleIds:
          arrRodeIdAll && arrRodeIdAll.length > 0 ? arrRodeIdAll[0].keyMap : "",
      });
    }
    if (prevProps.positionidallcode !== this.props.positionidallcode) {
      let arrpositionIdAll = this.props.positionidallcode;
      this.setState({
        positionIdAllcode: arrpositionIdAll,
        positionIds:
          arrpositionIdAll && arrpositionIdAll.length > 0
            ? arrpositionIdAll[0].keyMap
            : "",
      });
    }
    if (prevProps.alluser !== this.props.alluser) {
      let arrGenderAll = this.props.genderallcode;
      let arrRodeIdAll = this.props.rodeidallcode;
      let arrpositionIdAll = this.props.positionidallcode;

      this.setState({
        // users: this.props.alluser
        // users: this.props.alluser
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        gender:
          arrGenderAll && arrGenderAll.length > 0 ? arrGenderAll[0].keyMap : "",
        roleIds:
          arrRodeIdAll && arrRodeIdAll.length > 0 ? arrRodeIdAll[0].keyMap : "",
        positionIds:
          arrpositionIdAll && arrpositionIdAll.length > 0
            ? arrpositionIdAll[0].keyMap
            : "",
        avatar: "",
      });
    }
    if (prevProps.userUpdate !== this.props.userUpdate) {
      let userUdate = this.props.userUpdate;
      this.setState({
        idUpdate: userUdate.id,
        email: userUdate.email,
        password: userUdate.password,
        firstName: userUdate.firstName,
        lastName: userUdate.lastName,
        phoneNumber: userUdate.phonenumber,
        address: userUdate.address,
        gender: userUdate.gender,
        roleIds: userUdate.roleId,
        positionIds: userUdate.positionId,
        avatar: userUdate.image,
        actionChange: this.props.autoAction,
      });
    }
  }
  // handleOnchangeImage = (event) => {
  //   let data = event.target.files;
  //   let file = data[0];

  //   if (file) {
  //     let objectUrl = URL.createObjectURL(file);

  //     this.setState({
  //       previewImgURL: objectUrl,
  //       avatar: objectUrl,
  //     });
  //   }
  // };
  handleOnchangeImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vop4tq3m");
    this.setState({
      setLoading: true,
    });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dh-cantho/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      avatar: file.secure_url,
      setLoading: false,
    });
  };
  openPriewImage = () => {
    if (!this.state.avatar) return;
    else {
      this.setState({
        isOpen: true,
      });
    }
  };
  handleOnchangeInput = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  checkValideInput = () => {
    let valid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
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
  handleOnchangeSubmit = () => {
    let data = {
      id: this.state.idUpdate,
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phonenumber: this.state.phoneNumber,
      address: this.state.address,
      gender: this.state.gender,
      roleId: this.state.roleIds,
      positionId: this.state.positionIds,
      image: this.state.avatar,
    };
    if (this.state.actionChange === false) {
      let valid = this.checkValideInput();
      if (!valid) return;
      else {
        this.props.createNewUserStart(data);
      }
    }
    if (this.state.actionChange === true) {
      console.log("update success");
      let valid = this.checkValideInput();
      if (!valid) return;
      else {
        this.props.updateUserStart(data);
        let arrGenderAll = this.props.genderallcode;
        let arrRodeIdAll = this.props.rodeidallcode;
        let arrpositionIdAll = this.props.positionidallcode;
        this.setState({
          actionChange: false,
          // refesh data
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          address: "",
          gender:
            arrGenderAll && arrGenderAll.length > 0
              ? arrGenderAll[0].keyMap
              : "",
          roleIds:
            arrRodeIdAll && arrRodeIdAll.length > 0
              ? arrRodeIdAll[0].keyMap
              : "",
          positionIds:
            arrpositionIdAll && arrpositionIdAll.length > 0
              ? arrpositionIdAll[0].key
              : "",
          avatar: "",
        });
      }
    }
  };

  render() {
    let genders = this.props.genderallcode;

    let rodeid = this.props.rodeidallcode;

    let positionid = this.props.positionidallcode;

    return (
      <Fragment>
        {/* Form add new User */}
        <Form className="form-doctor">
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.email"} />
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.password"} />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.first-name"} />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.last-name"} />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.phone-number"} />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>
              <FormattedMessage id={"system.user-redux.address"} />
            </Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              type="text"
              name="address"
              value={this.state.address}
              onChange={(event) => {
                this.handleOnchangeInput(event);
              }}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.gender"} />
              </Form.Label>
              <Form.Select
                value={this.state.gender}
                name="gender"
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              >
                {genders &&
                  genders.length > 0 &&
                  genders.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {this.props.language === LANGUAGE.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.rodeId"} />
              </Form.Label>
              <Form.Select
                value={this.state.roleIds}
                name="roleIds"
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              >
                {rodeid &&
                  rodeid.length > 0 &&
                  rodeid.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {this.props.language === LANGUAGE.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.positionId"} />
              </Form.Label>
              <Form.Select
                value={this.state.positionIds}
                name="positionIds"
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
              >
                {positionid &&
                  positionid.length > 0 &&
                  positionid.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {this.props.language === LANGUAGE.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <FormattedMessage id={"system.user-redux.avatar"} />
              </Form.Label>
              <Form.Control
                type="file"
                // id="img-avatar"
                // hidden
                name="avatar"
                placeholder="upload an image"
                onChange={(event) => {
                  this.handleOnchangeImage(event);
                }}
              />
              {this.state.setLoading ? (
                <h3> Loading...</h3>
              ) : (
                <div
                  className="preview-image"
                  style={{ backgroundImage: `url(${this.state.avatar})` }}
                  onClick={() => this.openPriewImage()}
                ></div>
              )}
              {/* <Form.Label htmlFor="img-avatar" className="label-avatar">
                tai anh
              </Form.Label> */}

              {this.state.isOpen === true && (
                <Lightbox
                  mainSrc={this.state.avatar}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                />
              )}
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            onClick={() => {
              this.handleOnchangeSubmit();
            }}
          >
            {this.state.actionChange === true ? (
              <FormattedMessage id={"system.user-redux.updateUser"} />
            ) : (
              <FormattedMessage id={"system.user-redux.saveUser"} />
            )}
          </Button>
        </Form>
        {/* table user with redux */}
        <UserReduxTable handleEditUser={this.handeleUpdate} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderallcode: state.admin.genders,
    rodeidallcode: state.admin.roleId,
    positionidallcode: state.admin.positionId,
    alluser: state.admin.users,

    userUpdate: state.admin.userUpdate,
    autoAction: state.admin.autoAction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderAllcode: () => {
      dispatch(actions.fetchGenderStart());
    },
    getRodeIdAllcode: () => {
      dispatch(actions.fetchRodeIdStart());
    },
    getPositionIdAllcode: () => {
      dispatch(actions.fetchPositionIdStart());
    },
    createNewUserStart: (data) => {
      dispatch(actions.createNewUserStart(data));
    },
    fetchAllUserStart: () => {
      dispatch(actions.fetchAllUserStart());
    },
    updateUserStart: (idUser) => {
      dispatch(actions.updateUserStart(idUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
