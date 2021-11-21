import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import "react-markdown-editor-lite/lib/index.css";
import * as actions from "../../../store/actions";
import { dateFormat, LANGUAGE } from "../../../utils";
import "./Medical.scss";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment";
import _ from "lodash";
import { toast } from "react-toastify";
import { saveScheduleDoctor } from "../../../services/doctorService";

// Finish!

class Medical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: "",
      selectTimes: [],
    };
  }

  componentDidMount() {
    this.props.getTimecode();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.times !== this.props.times) {
      let data = this.props.times;
      if (data && data.length > 0)
        data = data.map((item) => ({ ...item, isSelected: false }));
      this.setState({
        selectTimes: data,
      });
    }
  }
  handleOnchangeDatePicker = (date) => {
    this.setState({
      currentData: date,
    });
  };
  handleOnlickTimes = (time) => {
    let { selectTimes } = this.state;
    if (selectTimes && selectTimes.length > 0) {
      selectTimes = selectTimes.map((item) => {
        if (item.id === time) item.isSelected = !item.isSelected;
        return item;
      });
      this.setState({
        selectTimes: selectTimes,
      });
    }
  };
  reverseString = (str) => {
    var arr = str.split("-"); //cat chuoi thanh tu phan tai phan tu va dua vao mang
    var reverseArr = arr.reverse(); // doi nguoc mang
    var newstr = reverseArr.join("-"); // join lai
    return newstr;
  };

  handleOnlicksave = async () => {
    let { currentData, selectTimes } = this.state;
    let { userInfo } = this.props;
    let result = [];
    if (selectTimes && selectTimes.length > 0) {
      selectTimes = selectTimes.filter((item) => item.isSelected == true);
      if (selectTimes.length > 0 && currentData) {
        let dateselected = moment(currentData[0]).format("YYYY-MM-DD");
        // let dateselected = new Date(currentData[1]).getTime();
        selectTimes.map((item) => {
          let object = {};
          object.doctorId = userInfo.id;
          object.date = dateselected;
          object.timeType = item.keyMap;
          result.push(object);
        });
        console.log(typeof result[0].idDoctor);
        let res = await saveScheduleDoctor({
          arrSchedule: result,
        });
        if (res && res.errcode === 0) toast.success("save sucess");
        else toast.error("faild");
      }
    } else toast.error("time didn't select");
    console.log(result.date);
  };
  render() {
    const { selectTimes } = this.state;
    const { language } = this.props;
    return (
      <Fragment>
        <h1>Doctor</h1>
        <DatePicker
          onChange={(date) => this.handleOnchangeDatePicker(date)}
          selected={this.state.currentData}
          minDate={new Date()}
        />

        <div className="center-time">
          {selectTimes &&
            selectTimes.length > 0 &&
            selectTimes.map((item, index) => {
              return (
                <button
                  className={
                    "btn-times " + (item.isSelected == true ? "active" : "")
                  }
                  key={index}
                  onClick={() => {
                    this.handleOnlickTimes(item.id);
                  }}
                >
                  {this.props.language === LANGUAGE.VI
                    ? item.valueVi
                    : item.valueEn}
                </button>
              );
            })}
        </div>
        <div className="save-time">
          <button
            className="btn"
            onClick={() => {
              this.handleOnlicksave();
            }}
          >
            save
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    times: state.admin.times,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTimecode: () => {
      dispatch(actions.fetchTimeStart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Medical);
