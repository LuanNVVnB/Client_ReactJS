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
import { adminMenu } from "../containers/System/Header/menuApp";
import CustomScrollbars from "../components/CustomScrollbars";

class System extends Component {
  render() {
    const { systemMenuPath } = this.props;
    return (
      <Fragment>
        <div className="system">
          <div className="menu">
            <Navigator menus={adminMenu} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
