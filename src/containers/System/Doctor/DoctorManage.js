import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Select from "react-select";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import * as actions from "../../../store/actions";

const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class DoctorMange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: null,
      contentHTML: "",
      contentMarkdown: "",
      description: "",
    };
  }

  componentDidMount() {
    this.props.AllDoctorStart();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.Alldoctor !== this.props.Alldoctor) {
      this.setState({
        selectedDoctor: this.props.Alldoctor,
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
    console.log("contentHTML: ", this.state);
  };
  render() {
    const { selectedDoctor } = this.state;
    return (
      <Fragment>
        <Select
          value={selectedDoctor}
          onChange={this.handleChange}
          options={options}
        />

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
        ></button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    Alldoctor: state.admin.Alldoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AllDoctorStart: () => {
      dispatch(actions.AllDoctorStart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorMange);
