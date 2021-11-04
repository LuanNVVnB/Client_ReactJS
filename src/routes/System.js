import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import API_UserManager from "../containers/System/API/API_UserManager";
import Header from "../containers/System/Header/Header";
import UserRedux from "../containers/System/Reducer/UserRedux";
import ProductManage from "../containers/System/ProductManage";
class System extends Component {
  render() {
    const { systemMenuPath } = this.props;
    return (
      <Fragment>
        {this.props.isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-System" component={ProductManage} />
              <Route path="/system/user-redux" component={UserRedux} />
              <Route path="/system/user-API" component={API_UserManager} />
              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
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
