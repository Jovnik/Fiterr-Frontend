import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import './assets/scss/index.scss';

import profileImgPaul from '../components/assets/media/paul-900x900.jpg';
import pageImg1 from '../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../components/assets/media/logo-28_day_kickstart-1080x1080.png';


const draftProfile = () => {
  return (
    <>
      <section className="body profile">
        <div className="container">
          {/* LEFT COL - NAVIGATION */}
          <ProfileLeftNav />

          {/* RIGHT COL - PROFILE */}
          <ProfileHeader />
        </div>
      </section>
    </>
  )
};


const ProfileLeftNav = () => {
  return (
    <>
      <div className="col-social-nav">
        {/* SECTION - USER SWITCHER */}
        <div className="nav-item-wrapper">
          <div className="nav-item switcher">
            <div className="switcher-image">
              <img src={profileImgPaul} alt=""/>
            </div>
            <div className="switcher-info">
              <Link to='/' className="name">
                <span> paul anthony meier </span>
              </Link>
              <div className="title">
                <span> fitness enthusiast </span>
              </div>
              <Link to='/' className="switcher">
                <span> switch to professional </span>
              </Link>
            </div>
          </div>
        </div>
        {/* SECTION - NAV SHORTCUTS */}
        <div style={{marginTop: '10px'}} className="nav-item-wrapper">
          <div className="nav-item section-title">
            <h3> shortcuts </h3>
          </div>
        </div>
        <Link to='/dashboard' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-tachometer-alt"></i><h3> dashboard </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-newspaper"></i><h3> newsfeed </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-user"></i><h3> profile </h3>
          </div>
        </Link>
        <Link to='/messages' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
          <i className="fas fa-comment-dots"></i><h3> messages </h3>
          </div>
        </Link>
        <Link to='/groups' className="nav-item-wrapper">
          <div className="nav-item menu-btn">
            <i className="fas fa-users"></i><h3> groups </h3>
          </div>
        </Link>
        {/* SECTION - BUSINESS PAGES */}
        <div style={{marginTop: '20px'}} className="nav-item-wrapper">
          <div className="nav-item section-title">
            <h3> business pages </h3>
          </div>
        </div>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg1} alt=""/>
            </div>
            <h3> paul meier fitness </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg2} alt=""/>
            </div>
            <h3> live fit - live lean </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg3} alt=""/>
            </div>
            <h3> 28 day fat loss kickstart challenge </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group create-new">
            <div className="page-image">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3> create a new business </h3>
          </div>
        </Link>
        {/* SECTION - GROUPS */}
        <div style={{marginTop: '20px'}} className="nav-item-wrapper">
          <div className="nav-item section-title">
            <h3> groups </h3>
          </div>
        </div>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg1} alt=""/>
            </div>
            <h3> PMF 1:1 clients </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg2} alt=""/>
            </div>
            <h3> PMF online clients </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group">
            <div className="page-image">
              <img src={pageImg3} alt=""/>
            </div>
            <h3> 28 day fat loss members </h3>
          </div>
        </Link>
        <Link to='/' className="nav-item-wrapper">
          <div className="nav-item menu-btn-page-group create-new">
            <div className="page-image">
              <i className="fas fa-users"></i>
            </div>
            <h3> create a new group </h3>
          </div>
        </Link>
      </div>
    </>
  )
};


const ProfileHeader = () => {
  return (
    <>
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
        <ProfileBody />
      </div>
    </>
  )
};


const ProfileBody = () => {
  return (
    <>
      <div className="profile-body-container">
        {/* LEFT COL - PROFILE TIMELINE */}
        <ProfileBodyTimeline />
        {/* RIGHT COL - PROFILE INFO WIDGETS */}
        <ProfileBodyWidgets />
      </div>
    </>
  )
};


const ProfileBodyTimeline = () => {
  return(
    <>
    {/* LEFT COL - PROFILE TIMELINE */}
      <div className="timeline-wrapper">
        <div className="post-box-wrapper">
          <div className="post-box-header">
            <div className="icon-bgr">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <h3> create post </h3>
          </div>
          <div className="post-box-body">
            <div className="profile-image">
              <img src={profileImgPaul} alt=""/>
            </div>
            <div className="post-input-field">
              <textarea  type="textarea" name="post" rows="3" autoComplete="off" placeholder="Share something with your followers ..." required/>
            </div>
          </div>
          <div className="post-box-actions">
            <div className="post-options">
              <button type="button" value="post-options">
                <i className="fas fa-users"></i>
                <span>followers</span>
                <i className="fas fa-caret-down"></i>
              </ button>
            </div>
            <div className="post-button">
              <button type="submit" value="submit"> post </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};


const ProfileBodyWidgets = () => {
  return (
    <>
      {/* RIGHT COL - PROFILE INFO WIDGETS */}
      <div className="profile-info-wrapper">
        <div className="profile-info">
          <div className="widget-wrapper">
            <div className="header">
              <div className="icon-bgr">
                <i className="fas fa-info-circle"></i>
              </div>
              <h3> about paul </h3>
            </div>
            <div className="body no-info">
              <p>nothing to display</p>
            </div>
          </div>
          <div className="widget-wrapper">
            <div className="header">
              <div className="icon-bgr">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3> followers <span> (169) </span> </h3>
            </div>
            {/* <div className="body no-info">
              <p>nothing to display</p>
            </div> */}
            <div className="body thumbnails">
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-user"></i>
              </div>
            </div>
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
            <div className="body thumbnails">
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
              <div className="thumbnail-widget">
                <i className="fas fa-camera"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};


const Posts = () => {
  return (
    <>
    <div className="timeline-post-wrapper">

      <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
        <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
        <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
        <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
        <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
        <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
        <div className="timeline-post">
          timeline post
        </div>
      </div>

      <div className="timeline-post-wrapper">
      <div className="timeline-post">
        timeline post
      </div>

    </div>
    </>
  )
};


const NewComponent = () => {
  return (
    <>
    </>
  )
};


export default draftProfile;
