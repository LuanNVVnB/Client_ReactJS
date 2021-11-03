import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./UserReduxTable.scss";


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
class UserReduxTable extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            users: [],

        })
    }
    componentDidMount() {
        this.props.fetchAllUserStart();

    }
    componentDidUpdate(prevProps) {
        if (prevProps.alluser !== this.props.alluser) {
            this.setState({
                users: this.props.alluser
            }
            )
        }
    }
    handeleDelete = async (IdUser) => {
        try {
            await this.props.deleteUserStart(IdUser.item.id);
        } catch (e) {
            console.log(e)
        }

    }
    handeleUpdate = async (IdUser) => {
        try {
            await this.props.fetchOneUserStart(IdUser.item.id);
        } catch (e) {
            console.log(e)
        }

    }
    render() {
        let Users = this.state.users;

        return (
            <Fragment>
                <div className="text-center">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr className="table-danger">
                                <th scope="col">STT</th>
                                <th scope="col">Email</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Role</th>
                                <th scope="col">Position</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users && Users.length > 0 &&
                                Users.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index}</th>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.roleId}</td>
                                            <td>{item.positionId}</td>

                                            <td>
                                                <button onClick={() => { this.handeleUpdate({ item }) }}>Edit</button>
                                                <button onClick={() => { this.handeleDelete({ item }) }} >Delete</button>

                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alluser: state.admin.users,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUserStart: () => { dispatch(actions.fetchAllUserStart()) },
        deleteUserStart: (idUser) => { dispatch(actions.deleteUserStart(idUser)) },
        fetchOneUserStart: (idUser) => { dispatch(actions.fetchOneUserStart(idUser)) },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReduxTable);
