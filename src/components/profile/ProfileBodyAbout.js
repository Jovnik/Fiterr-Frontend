import React from 'react';
import EditProfile from './EditProfile';

const ProfileBodyAbout = ({ profile, ourProfile }) => {

    const { user: { firstname, lastname }, aboutMe } = profile;

    return (
      <div className="page-container services">
        <div className="container-wrapper">
          <div className="header">
            <div className="icon-bgr">
              <i className="fas fa-info-circle"></i>
            </div>
            <h3> about </h3>
          </div>
          <div className="about-body">
            <span>Name: {`${firstname} ${lastname}`}</span>
            <span>D.o.b: </span>
            <span>About: {aboutMe}</span>
            <EditProfile />
          </div>
        </div>
      </div>
    )
};

export default ProfileBodyAbout
