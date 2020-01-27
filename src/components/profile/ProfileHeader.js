import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ProfileBody from './ProfileBody';
import { useRouteMatch  } from 'react-router-dom';
import { inSection } from '../../utils/Utils';

// import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import Follow from './Follow';

const ProfileHeader = ({ profile, ourProfile }) => {

  const { displayImage, coverImage, user: { firstname, lastname }} = profile;

  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <Fragment>
      <div className="col-profile">

        <div className="profile-header-container">
          <div className="cover-image-wrapper">
            <div className="cover-image">
              <div className="cover-image-gradient">
              </div>
              <div className="name-actions">
                <div className="profile-name">
                  <h3>{`${firstname} ${lastname}`}</h3>
                  <h3 className="title">(enthusiast)</h3>
                  {/* <h3 className="title">(professional)</h3> */}
                  <div className="profile-badge">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
                <div className="profile-actions"> 
                  { ourProfile ? (
                    <Fragment>
                      <button className="switcher" type="button" value="">
                        <i className="fas fa-sync-alt"></i>
                      </button>
                      <Link to={`${url}/edit`}>
                        <button className="update-info" type="button" value="">
                          <i className="fas fa-pencil-alt"></i>
                          update info
                        </button> 
                      </Link>
                      {/* <EditProfile /> */}
                    </Fragment>
                  ) : (
                    <Follow userId={profile.user._id}/>
                  )}
                </div>
              </div>
              <div className="image-update">
                <i className="fas fa-camera"></i>
                <h3>update cover photo</h3>
              </div>
              <img src={coverImage} alt=""/>
            </div>
          </div>
          <div className="profile-nav-container">
            <div className="profile-image-wrapper">
              <div className="profile-image-border">
                <div className="profile-image">
                  <img src={displayImage ? displayImage : profileImgPaul} alt=""/>
                  <div className="image-update">
                    <i className="fas fa-camera"></i>
                    <h3>update</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-nav-wrapper">
              <div className="profile-nav">
                
              <Link to={`${url}/stream`} className={inSection(location, 'stream') ? "nav-item-wrapper caret stream" : "nav-item-wrapper stream"}>
                <div className="nav-item">
                  <h3> stream </h3>
                </div>
              </Link>

              <Link to={`${url}/about`} className={inSection(location, 'about') ? "nav-item-wrapper caret" : "nav-item-wrapper" }>
                <div className="nav-item">
                  <h3> about </h3>
                </div>
              </Link>

              <Link to={`${url}/services`} className={inSection(location, 'services') ? "nav-item-wrapper caret" : "nav-item-wrapper" }>
                <div className="nav-item">
                  <h3> services </h3>
                </div>
              </Link>

              <Link to={`${url}/following`} className={inSection(location, 'following') ? "nav-item-wrapper caret" : "nav-item-wrapper" }>
                <div className="nav-item">
                  <h3> following </h3>
                </div>
              </Link>

              <Link to={`${url}/photos`} className={inSection(location, 'photos') ? "nav-item-wrapper caret" : "nav-item-wrapper" }>
                <div className="nav-item">
                  <h3> photos </h3>
                </div>
              </Link>

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
