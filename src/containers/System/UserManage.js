import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAlluser, createNewUserService, deleteUserService, updateUserService } from "../../services/userService";
import UserModel from "./UserModel";
import UserModelUpdate from "./UserModelUpdate";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
      userUpdate: {},
      isOpenUpdateModal: false
    };
  }
  handleAddnewuser = () => {
    this.setState({
      isOpenModal: true,
    });
  };
  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  toggleUpdateModal = () => {
    this.setState({
      isOpenUpdateModal: !this.state.isOpenUpdateModal,
    });
  };


  async componentDidMount() {
    await this.getAllUserService();

  }
  getAllUserService = async () => {
    let response = await getAlluser("All");
    if (response && response.errcode === 0) {
      this.setState({
        arrUsers: response.users,
      });
      //     () => {
      //       console.log("check one ", this.state.arrUsers);
      //     }//conpact when async
      //   );
      //   console.log("check two ", this.state.arrUsers);
    }
  }
  createNewUser = async (data) => {

    try {
      let response = await createNewUserService(data);
      // console.log("check :", response);

      if (response && response.users.errcode !== 0) {
        // alert(response.message);
        alert(response.users.message);

      } else {
        alert("All new user succesful");
        await this.getAllUserService();

      }

    } catch (e) {
      console.log(e)
    }

  }
  handeleUpdate = (userupdate) => {
    this.setState({
      userUpdate: userupdate.item,
      isOpenUpdateModal: true,
    })


  }
  handeleDeleteService = async (userdelete) => {

    try {
      console.log("id: ", userdelete.item.id);
      let response = await deleteUserService(userdelete.item.id);
      // console.log("delete: ", response);
      // console.log("errovode: ", response.deleteuser.errcode);
      if (response && response.deleteuser.errcode !== 0) {
        // alert(response.message);
        alert(response.deleteuser.message);

      } else {
        alert("delete user succesfull")
        await this.getAllUserService();
      }

    } catch (e) {
      console.log(e)
    }

  }

  handleUpdateOneUser = async (user) => {
    let response = await updateUserService(user);
    console.log("update: ", response);
    if (response && response.updateuser.errcode !== 0) {
      alert(response.updateuser.message);

    } else {
      alert("update user succesfull");
      await this.getAllUserService();
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;

    return (
      <div className="text-center">
        <UserModel
          createNewUser={this.createNewUser}
          isOpen={this.state.isOpenModal}
          toggleModal={this.toggleModal}
        />
        {
          this.state.isOpenUpdateModal &&
          <UserModelUpdate
            UserUpdate={this.state.userUpdate}
            isOpen={this.state.isOpenUpdateModal}
            // isOpen={true}
            toggleModal={this.toggleUpdateModal}
            updateOneUser={this.handleUpdateOneUser}
          />
        }

        <button
          className="btn btn-primary px-3"
          onClick={() => {
            this.handleAddnewuser();
          }}
        >
          <i class="fas fa-user-plus"></i>
          Add new User
        </button>
        <table class="table">
          <thead class="thead-dark">
            <tr className="table-danger">
              <th scope="col">STT</th>
              <th scope="col">Email</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arrUsers &&
              arrUsers.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.gender ? "M" : "F"}</td>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
