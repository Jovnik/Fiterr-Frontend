import React, { Fragment } from 'react'
import FollowersWidget from './FollowersWidget';
import PhotosWidget from './PhotosWidget';

const ProfileBodyWidgets = ({ profile }) => {

  const{ user: { firstname }, following, aboutMe, followers, images } = profile;

  // console.log('yoooooooooo', following);

    return (
      <Fragment>
        {/* RIGHT COL - PROFILE INFO WIDGETS */}
        <div className="profile-info-wrapper">
          <div className="profile-info">
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-info-circle"></i>
                </div>
                <h3> about {firstname} </h3>
              </div>
              <div className="body no-info">
                <p> { aboutMe } </p>
              </div>
            </div>
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3> followers <span> { followers.length } </span> </h3>
              </div>
              {/* <div className="body no-info">
                <p>nothing to display</p>
              </div> */}              
              <FollowersWidget following={following} />
              

            </div>
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-camera"></i>
                </div>
                <h3> photos </h3>
              </div>
              {/* <div className="body no-info">
                <p>nothing to display</p>
              </div> */}
              <PhotosWidget images={images}/>

            </div>
          </div>
        </div>
      </Fragment>
    )
};

export default ProfileBodyWidgets
