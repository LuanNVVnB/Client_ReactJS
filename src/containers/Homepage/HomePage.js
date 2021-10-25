import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import Home_header from "./Home_header";
import CenterFind from "./Center/CenterFind";
import CenterSession from "./Center/CenterSession";
class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (
            <div>
                <Home_header />
                <CenterFind />
                <CenterSession />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
