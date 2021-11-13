import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Select from "react-select";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";

const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

class DoctorMange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: null,
      contentHTML: "",
      contentMarkdown: "",
      description: "",
      listDoctors: [],
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

  componentDidMount() {
    this.props.AllDoctorStart();
  }
  componentDidUpdate(prevProps) {
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
    }
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentHTML: html,
      contentMarkdown: text,
    });
  };
  //select component

  handleChange = (selectedDoctor) => {
    this.setState({ selectedDoctor });
  };
  handleOnlickSubmit = () => {
    let data = {
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
    };
    this.props.saveInfoDoctorStart(data);
  };
  handleSearchDoctor = () => {
    console.log("select: ", this.state.selectedDoctor.value);
    this.props.fetchOneDoctorStart(this.state.selectedDoctor.value);
    console.log("doctor:", this.props.doctor);
  };
  render() {
    const { selectedDoctor } = this.state;
    return (
      <Fragment>
        <Select
          value={selectedDoctor}
          onChange={this.handleChange}
          options={this.state.listDoctors}
        />
        <button
          type="submit"
          value="search"
          onClick={() => {
            this.handleSearchDoctor();
          }}
        >
          Search
        </button>

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
          save
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
