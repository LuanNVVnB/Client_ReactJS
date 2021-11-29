import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./UserReduxTable.scss";

// import { Button, Modal } from "reactstrap";
import { Button, Table } from "react-bootstrap";
class UserReduxTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllUserStart();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.alluser !== this.props.alluser) {
      this.setState({
        users: this.props.alluser,
      });
    }
  }
  handeleDelete = async (IdUser) => {
    try {
      await this.props.deleteUserStart(IdUser.item.id);
    } catch (e) {
      console.log(e);
    }
  };
  handeleUpdate = async (IdUser) => {
    try {
      await this.props.fetchOneUserStart(IdUser.item.id);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    let Users = this.state.users;

    return (
      <Fragment>
        <div className="text-center">
          <Table striped bordered hover>
            <thead>
              <tr
                style={{
                  background: "#553D67",
                  color: "#fff",
                }}
              >
                <th>STT</th>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Users &&
                Users.length > 0 &&
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
                        <Button
                          style={{
                            paddingBottom: "10px !important",
                            height: "40px",
                            marginLeft: "5px !important",
                          }}
                          variant="outline-warning"
                          value="edit"
                          onClick={() => {
                            this.handeleUpdate({ item });
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          style={{
                            paddingBottom: "10px !important",
                            height: "40px",
                          }}
                          variant="outline-danger"
                          value="edit"
                          onClick={() => {
                            this.handeleDelete({ item });
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
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
    fetchAllUserStart: () => {
      dispatch(actions.fetchAllUserStart());
    },
    deleteUserStart: (idUser) => {
      dispatch(actions.deleteUserStart(idUser));
    },
    fetchOneUserStart: (idUser) => {
      dispatch(actions.fetchOneUserStart(idUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReduxTable);
