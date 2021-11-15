import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navigator from "../components/Navigator";
import "./System.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import API_UserManager from "../containers/System/API/API_UserManager";
import Header from "../containers/System/Header/Header";
import UserRedux from "../containers/System/Reducer/UserRedux";
import ProductManage from "../containers/System/ProductManage";
import DoctorManage from "../containers/System/Doctor/DoctorManage";
import { adminMenu, doctorMenu } from "../containers/System/Header/menuApp";
import CustomScrollbars from "../components/CustomScrollbars";
import _ from "lodash";
import Medical from "../containers/System/Doctor/Medical";
class System extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuApp: [],
    };
  }
  componentDidMount() {
    let { userInfo } = this.props;
    let menu = [];
    if (userInfo && !_.isEmpty(userInfo)) {
      let role = userInfo.roleId;
      if (role === "R1") {
        menu = adminMenu;
      }
      if (role === "R2") {
        menu = doctorMenu;
      }
    }
    this.setState({
      menuApp: menu,
    });
  }

  render() {
    const { systemMenuPath } = this.props;
    return (
      <Fragment>
        <div className="system">
          <div className="menu">
            <Navigator menus={this.state.menuApp} />
          </div>
          <div className="center-system">
            {this.props.isLoggedIn && <Header />}

            <div className="system-list">
              <Switch>
                <Route path="/system/user-System" component={ProductManage} />
                <Route path="/system/user-redux" component={UserRedux} />
                <Route path="/system/user-API" component={API_UserManager} />
                <Route path="/system/doctor" component={DoctorManage} />
                <Route path="/system/patient" component={API_UserManager} />
                <Route path="/system/medical" component={Medical} />
                <Redirect to="/system/user-System" />
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
