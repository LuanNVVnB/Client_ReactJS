import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Select from "react-select";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import "./DoctorManage.scss";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

class DoctorMange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: null,
      listDoctors: [],
      prices: [],
      provinces: [],
      pays: [],
      idDoctor: 0,
      //form information
      contentHTML: "",
      contentMarkdown: "",
      description: "",
      priceId: "",
      provinceId: "",
      paymentId: "",
      addressClinic: "",
      nameClinic: "",
      count: 0,
      expert: 0,
      effective: 0,
    };
  }
  buildSelectDoctor = (inputData) => {
    let result = [];
    let language = this.props.language;
    if (inputData && inputData.length > 0) {
      inputData.map((item) => {
        let doctor = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        doctor.label = language === LANGUAGE.VI ? labelVi : labelEn;
        doctor.value = item.id;
        result.push(doctor);
      });
    }
    return result;
  };
  buildSelectAllcode = (inputData) => {
    let result = [];
    let language = this.props.language;
    if (inputData && inputData.length > 0) {
      inputData.map((item) => {
        let Allcode = {};
        let labelVi = item.valueVi;
        let labelEn = item.valueEn;
        Allcode.label = language === LANGUAGE.VI ? labelVi : labelEn;
        Allcode.value = item.id;
        result.push(Allcode);
      });
    }
    return result;
  };

  componentDidMount() {
    this.props.fetchPriceStart();
    this.props.fetchPayStart();
    this.props.fetchProvinceStart();
    this.props.AllDoctorStart();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.price !== this.props.price) {
      let arrPriceAll = this.buildSelectAllcode(this.props.price);
      this.setState({
        prices: arrPriceAll,
        priceId:
          arrPriceAll && arrPriceAll.length > 0 ? arrPriceAll[0].keyMap : "",
      });
    }
    if (prevProps.pay !== this.props.pay) {
      let arrPayAll = this.buildSelectAllcode(this.props.pay);
      this.setState({
        pays: arrPayAll,
        paymentId: arrPayAll && arrPayAll.length > 0 ? arrPayAll[0].keyMap : "",
      });
    }
    if (prevProps.province !== this.props.province) {
      let arrProvinceAll = this.buildSelectAllcode(this.props.province);
      this.setState({
        provinces: arrProvinceAll,
        provinceId:
          arrProvinceAll && arrProvinceAll.length > 0
            ? arrProvinceAll[0].keyMap
            : "",
      });
    }
    if (prevProps.Alldoctor !== this.props.Alldoctor) {
      let dataselect = this.buildSelectDoctor(this.props.Alldoctor);
      this.setState({
        listDoctors: dataselect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataselect = this.buildSelectDoctor(this.props.Alldoctor);
      this.setState({
        listDoctors: dataselect,
      });
      let arrPriceAll = this.buildSelectAllcode(this.props.price);
      this.setState({
        prices: arrPriceAll,
        priceId:
          arrPriceAll && arrPriceAll.length > 0 ? arrPriceAll[0].keyMap : "",
      });
      let arrPayAll = this.buildSelectAllcode(this.props.pay);
      this.setState({
        pays: arrPayAll,
        paymentId: arrPayAll && arrPayAll.length > 0 ? arrPayAll[0].keyMap : "",
      });
      let arrProvinceAll = this.buildSelectAllcode(this.props.province);
      this.setState({
        provinces: arrProvinceAll,
        provinceId:
          arrProvinceAll && arrProvinceAll.length > 0
            ? arrProvinceAll[0].keyMap
            : "",
      });
    }
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentHTML: html,
      contentMarkdown: text,
    });
  };
  //select component

  handleChangeSelectedDoctor = (selectedDoctor) => {
    this.setState({ selectedDoctor });
  };
  handleChangePrice = (priceId) => {
    this.setState({ priceId });
  };
  handleChangePay = (paymentId) => {
    this.setState({ paymentId });
  };
  handleChangeProvince = (provinceId) => {
    this.setState({ provinceId });
  };
  handleOnchangeInput = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleOnlickSubmit = () => {
    let data = {
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
      priceId: this.state.priceId.value,
      provinceId: this.state.provinceId.value,
      paymentId: this.state.paymentId.value,
      addressClinic: this.state.addressClinic,
      nameClinic: this.state.nameClinic,
      count: this.state.count,
      expert: this.state.expert,
      effective: this.state.effective,
    };
    let valid = this.checkValideInput();
    if (!valid) return;
    else {
      this.props.saveInfoDoctorStart(data);
    }
  };
  handleSearchDoctor = () => {
    console.log("select: ", this.state.selectedDoctor.value);
    this.props.fetchOneDoctorStart(this.state.selectedDoctor.value);
    console.log("doctor:", this.props.doctor);
  };

  checkValideInput = () => {
    let valid = true;
    let arrInput = [
      "contentHTML",
      "contentMarkdown",
      "description",
      "priceId",
      "provinceId",
      "paymentId",
      "addressClinic",
      "nameClinic",
      "expert",
      "effective",
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
  render() {
    const {
      selectedDoctor,
      provinces,
      pays,
      prices,
      priceId,
      provinceId,
      paymentId,
      addressClinic,
      nameClinic,
      expert,
      effective,
      count,
      description,
    } = this.state;

    return (
      <Fragment>
        <div className="selected-doctor">
          <div className="search-doctor">
            <Select
              value={selectedDoctor}
              onChange={this.handleChangeSelectedDoctor}
              options={this.state.listDoctors}
              placeholder="select doctor"
              className="item-search"
            />
            <Button
              style={{ paddingBottom: "10px !important", height: "40px" }}
              variant="outline-warning"
              value="search"
              onClick={() => {
                this.handleSearchDoctor();
              }}
            >
              <i className="fas fa-search" style={{ marginRight: "5px" }}></i>
              <FormattedMessage id={"system.common.save"} />
            </Button>
          </div>
          <Form className="info-doctor">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="3">
                count
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  plaintext
                  readOnly
                  value={this.state.count}
                ></Form.Control>
              </Col>
              <Form.Label column sm="3">
                ID doctor
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  plaintext
                  readOnly
                  value={selectedDoctor ? selectedDoctor.value : ""}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="center">
          <Form className="register-doctor">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm="2">
                <Select
                  value={priceId}
                  options={prices}
                  placeholder="price money"
                  name="priceId"
                  onChange={this.handleChangePrice}
                />
              </Col>
              <Col sm="3">
                <Select
                  value={paymentId}
                  options={pays}
                  placeholder="pay money"
                  name="paymentId"
                  onChange={this.handleChangePay}
                />
              </Col>

              <Col sm="3">
                <Select
                  value={provinceId}
                  options={provinces}
                  placeholder="selected province"
                  name="provinceId"
                  onChange={this.handleChangeProvince}
                />
              </Col>
              <Form.Label column sm="1">
                experience
              </Form.Label>
              <Col sm="1">
                <Form.Control
                  type="text"
                  value={expert}
                  name="expert"
                  onChange={(event) => {
                    this.handleOnchangeInput(event);
                  }}
                />
              </Col>
              <Form.Label column sm="1">
                effective
              </Form.Label>
              <Col sm="1">
                <Form.Control
                  type="text"
                  value={effective}
                  name="effective"
                  onChange={(event) => {
                    this.handleOnchangeInput(event);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="1">
                Name clinic
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  placeholder="Name Clinic"
                  value={nameClinic}
                  name="nameClinic"
                  onChange={(event) => {
                    this.handleOnchangeInput(event);
                  }}
                />
              </Col>
              <Form.Label column sm="1">
                address clinic
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  type="text"
                  placeholder="Name Clinic"
                  value={addressClinic}
                  name="addressClinic"
                  onChange={(event) => {
                    this.handleOnchangeInput(event);
                  }}
                />
              </Col>
            </Form.Group>
          </Form>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="description"
            style={{ margin: "10px" }}
          >
            <Form.Control
              value={description}
              as="textarea"
              placeholder="Leave a comment here"
              style={{
                height: "100px",
                margin: "5px",
              }}
              name="description"
              onChange={(event) => {
                this.handleOnchangeInput(event);
              }}
            />
          </FloatingLabel>
        </div>

        <MdEditor
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={this.handleEditorChange}
        />
        <button
          type="submit"
          value="save"
          onClick={() => {
            this.handleOnlickSubmit();
          }}
        >
          <FormattedMessage id={"system.common.save"} />
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    Alldoctor: state.admin.Alldoctor,
    doctor: state.admin.doctor,
    price: state.admin.price,
    pay: state.admin.pay,
    province: state.admin.province,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPriceStart: () => {
      dispatch(actions.fetchPriceStart());
    },
    fetchPayStart: () => {
      dispatch(actions.fetchPayStart());
    },
    fetchProvinceStart: () => {
      dispatch(actions.fetchProvinceStart());
    },
    AllDoctorStart: () => {
      dispatch(actions.AllDoctorStart());
    },
    saveInfoDoctorStart: (data) => {
      dispatch(actions.saveInfoDoctorStart(data));
    },
    fetchOneDoctorStart: (idDoctor) => {
      dispatch(actions.fetchOneDoctorStart(idDoctor));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorMange);
