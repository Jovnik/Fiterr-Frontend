import React, { Fragment } from 'react'
import ProfileBody from './ProfileBody';

// ALERT
// the logic will probably need to start here to detect if we are on our profile or not
// if we arent, then we will fetch the profile of the user we are viewing (viewingUser) and display their profile pic

const ProfileHeader = ({ profile, ourProfile }) => {

    // debugger
    // console.log('Profile Header', profile, ourProfile);

    return (
      <Fragment>
        <div className="col-profile">
  
          <div className="profile-header-container">
            <div className="cover-image-wrapper">
              <div className="cover-image">
              </div>
            </div>
            <div className="profile-nav-container">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                </div>
              </div>
              <div className="profile-nav-wrapper">
                <div className="profile-nav">
                </div>
              </div>
            </div>
          </div>
          <ProfileBody profile={profile} ourProfile={ourProfile}/>
        </div>
      </Fragment>
    )
};

export default ProfileHeader
