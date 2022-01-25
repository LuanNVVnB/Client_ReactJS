import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./DoctorDetail.scss";

export class DoctorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  componentDidMount() {}

  render() {
    let doctor = this.props.location.state.doctor;
    const detailDoctor = doctor.Detail ? doctor.Detail : "";
    // const detailDoctor = doctor.Detail ? doctor.Detail : "";

    return (
      <Fragment>
        <div className="center-detail_doctor">
          <div className="center1">
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: detailDoctor.contentHTML }}
            ></div>
            <div className="interests">
              <div className="interests-title">Interests</div>
              <div className="interests-center">
                <div className="interests-item">
                  <i class="fas fa-music"></i>
                  <div className="interests-name">Musics</div>
                </div>
                <div className="interests-item">
                  <i class="fas fa-plane"></i>
                  <div className="interests-name">Travels</div>
                </div>
                <div className="interests-item">
                  <i class="fas fa-futbol"></i>
                  <div className="interests-name">Soccers</div>
                </div>
                <div className="interests-item">
                  <i class="fas fa-gamepad"></i>
                  <div className="interests-name">Games</div>
                </div>
              </div>
            </div>
          </div>
          <div className="center2">
            <div className="avatar-doctor">
              <div className="name-doctor">
                <div className="name-doctor2">
                  {doctor.firstName.toUpperCase()}
                </div>
                <div className="name-doctor1">
                  {doctor.lastName.toUpperCase()}
                </div>
              </div>
              <div className="image-avatar">
                <img src={doctor.image}></img>
              </div>
            </div>

            <div className="interact">
              <div className="interact-item">
                <i class="fab fa-twitter-square"></i>
                <div className="interact-name">Twitter</div>
              </div>
              <div className="interact-item">
                <i class="fab fa-facebook"></i>
                <div className="interact-name">Facebook</div>
              </div>
              <div className="interact-item">
                <i class="fab fa-instagram"></i>
                <div className="interact-name">Instagram</div>
              </div>
            </div>
            <div className="skills">
              <div className="skills-title">Skills:</div>
              <div className="skills-item">
                <div className="skills-name">Expert:</div>
                <div className="skills-center"></div>
              </div>
              <div className="skills-item">
                <div className="skills-name">affective:</div>
                <div className="skills-center"></div>
              </div>
            </div>
            <div className="experience">
              <div className="experience-title">Experience:</div>
              <div className="experience-center"></div>
            </div>
            <div className="education">
              <div className="education-title">Education:</div>
              <div className="education-center"></div>
            </div>
            <div className="address-specialty">
              <div className="address-specialty-title">Address specialty:</div>
              <div className="address-specialty-center"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    doctor: state.admin.doctor,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneDoctorStart: (iddoctor) =>
      dispatch(actions.fetchOneDoctorStart(iddoctor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail);
