import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserRedux.scss";
import * as actions from "../../store/actions";
import { LANGUAGE } from '../../utils';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app




import {

    FormGroup,
    Form,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'react-bootstrap';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //code convert 
            genderAllcode: [],
            rodeIdAllcode: [],
            positionIdAllcode: [],
            isOpen: false,
            previewImgURL: "",

            //information Create user
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            gender: "",
            roleIds: "",
            positionIds: "",
            avatar: "",
            //user of model
            users: [],

        }
    }

    componentDidMount() {
        this.props.getGenderAllcode();
        this.props.getRodeIdAllcode();
        this.props.getPositionIdAllcode();
        this.props.createNewUserStart();
        this.props.fetchAllUserStart();


    }


    //state change 
    componentDidUpdate(prevProps) {
        if (prevProps.genderallcode !== this.props.genderallcode) {
            let arrGenderAll = this.props.genderallcode;

            this.setState({
                genderAllcode: arrGenderAll,
                gender: arrGenderAll && arrGenderAll.length > 0 ? arrGenderAll[0].key : ""
            })
        }
        if (prevProps.rodeidallcode !== this.props.rodeidallcode) {
            let arrRodeIdAll = this.props.rodeidallcode;
            this.setState({
                rodeIdAllcode: arrRodeIdAll,
                roleIds: arrRodeIdAll && arrRodeIdAll.length > 0 ? arrRodeIdAll[0].key : ""
            })
        }
        if (prevProps.positionidallcode !== this.props.positionidallcode) {
            let arrpositionIdAll = this.props.positionidallcode
            this.setState({
                positionIdAllcode: arrpositionIdAll,
                positionIds: arrpositionIdAll && arrpositionIdAll.length > 0 ? arrpositionIdAll[0].key : ""
            })
        }
        if (prevProps.alluser !== this.props.alluser) {
            this.setState({
                users: this.props.alluser
            })
        }
    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: file
            })
        }

    }
    openPriewImage = () => {
        if (!this.state.previewImgURL) return;
        else {
            this.setState({
                isOpen: true

            })
        }
    }
    handleOnchangeInput = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    checkValideInput = () => {
        let valid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                alert("Missing parameter: " + arrInput[i]);
                valid = false;
                break;
            }
        }
        return valid;
    }
    handleOnchangeSubmit = async (event) => {

        let valid = this.checkValideInput();
        if (!valid) return;
        else {
            await this.props.createNewUserStart({
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstName,
                lastname: this.state.lastName,
                phonenumber: this.state.phoneNumber,
                address: this.state.address,
                gender: this.state.gender,
                roleId: this.state.roleIds,
                positionId: this.state.positionIds,
                image: this.state.avatar,

            });
            await this.props.fetchAllUserStart();
        }

    }
    handeleUpdate = (user) => {

    }
    handeleDelete = (user) => {

    }


    render() {
        let genders = this.props.genderallcode;


        let rodeid = this.props.rodeidallcode;

        let positionid = this.props.positionidallcode;

        let Users = this.state.users;




        return (
            <Fragment>
                {/* Form add new User */}
                <Form className="form-doctor">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><FormattedMessage id={"system.user-redux.email"} /></Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email"
                                onChange={(event) => { this.handleOnchangeInput(event) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label><FormattedMessage id={"system.user-redux.password"} /></Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                onChange={(event) => { this.handleOnchangeInput(event) }} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><FormattedMessage id={"system.user-redux.first-name"} /></Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" name="firstName"
                                onChange={(event) => { this.handleOnchangeInput(event) }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label><FormattedMessage id={"system.user-redux.last-name"} /></Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name="lastName"
                                onChange={(event) => { this.handleOnchangeInput(event) }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><FormattedMessage id={"system.user-redux.phone-number"} /></Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" name="phoneNumber"
                                onChange={(event) => { this.handleOnchangeInput(event) }} />
                        </Form.Group>
                    </Row>


                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label><FormattedMessage id={"system.user-redux.address"} /></Form.Label>
                        <Form.Control placeholder="1234 Main St" type="text" name="address"
                            onChange={(event) => { this.handleOnchangeInput(event) }} />
                    </Form.Group>



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><FormattedMessage id={"system.user-redux.gender"} /></Form.Label>
                            <Form.Select defaultValue="Choose..." name="gender"
                                onChange={(event) => { this.handleOnchangeInput(event) }}>
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (

                                            <option key={index} value={item.key}>{
                                                this.props.language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )

                                    })
                                }

                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><FormattedMessage id={"system.user-redux.rodeId"} /></Form.Label>
                            <Form.Select defaultValue="Choose..." name="roleIds"
                                onChange={(event) => { this.handleOnchangeInput(event) }}>
                                {rodeid && rodeid.length > 0 &&
                                    rodeid.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}>{
                                                this.props.language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )

                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><FormattedMessage id={"system.user-redux.positionId"} /></Form.Label>
                            <Form.Select defaultValue="Choose..." name="positionIds"
                                onChange={(event) => { this.handleOnchangeInput(event) }}>
                                {positionid && positionid.length > 0 &&
                                    positionid.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}>{
                                                this.props.language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )

                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><FormattedMessage id={"system.user-redux.avatar"} /></Form.Label>
                            <Form.Control type="file" id="img-avatar" hidden name="avatar"
                                onChange={(event) => { this.handleOnchangeImage(event) }} />
                            <Form.Label htmlFor="img-avatar" className="label-avatar" >tai anh</Form.Label>
                            <div className="preview-image"
                                style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                onClick={() => this.openPriewImage()} >

                            </div>
                            {this.state.isOpen === true &&
                                (
                                    <Lightbox
                                        mainSrc={this.state.previewImgURL}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                    />)
                            }
                        </Form.Group>



                    </Row>



                    <Button variant="primary" type="submit" onClick={() => {
                        this.handleOnchangeSubmit()
                    }}>
                        Submit
                    </Button>
                </Form>
                {/* table user with redux */}
                <div className="text-center">
                    <table class="table">
                        <thead class="thead-dark">
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


            </Fragment >


        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderallcode: state.admin.genders,
        rodeidallcode: state.admin.roleId,
        positionidallcode: state.admin.positionId,
        alluser: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderAllcode: () => { dispatch(actions.fetchGenderStart()) },
        getRodeIdAllcode: () => { dispatch(actions.fetchRodeIdStart()) },
        getPositionIdAllcode: () => { dispatch(actions.fetchPositionIdStart()) },
        createNewUserStart: (data) => { dispatch(actions.createNewUserStart(data)) },
        fetchAllUserStart: () => { dispatch(actions.fetchAllUserStart()) },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
