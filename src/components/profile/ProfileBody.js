import React, { Fragment } from 'react';
import StickyBox from "react-sticky-box";
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

import ProfileBodyTimeline from './ProfileBodyTimeline';
import ProfileBodyWidgets from './ProfileBodyWidgets';
import ProfileBodyAbout from './ProfileBodyAbout';
import ProfileBodyPhotos from './ProfileBodyPhotos';
import ProfileBodyServices from './ProfileBodyServices';
import ProfileBodyFollowing from './ProfileBodyFollowing';


const ProfileBody = ({ profile, ourProfile }) => {
  
    // if(ourProfile) { 
    //   console.log('our profile', profile) 
    // } else { 
    //   console.log('not our profile', profile) 
    // }

    console.log('profile', profile);

    const { path } = useRouteMatch();

    return (
      <Fragment>
        <div className="profile-body-container">
          {/* LEFT COL - PROFILE TIMELINE */}

          <Switch>
            <Route exact path={`${path}/about`} render={props => <ProfileBodyAbout profile={profile} ourProfile={ourProfile} />} />
            <Route exact path={`${path}/photos`} component={ProfileBodyPhotos} />
            <Route exact path={`${path}/services`} component={ProfileBodyServices} />
            <Route exact path={`${path}/following`} component={ProfileBodyFollowing} />
            <Route exact path={[`${path}`, `${path}/*`, `${path}/stream`]} render={props => <ProfileBodyTimeline profile={profile} ourProfile={ourProfile} /> } />
          </Switch>

          {/* <ProfileBodyTimeline profile={profile} ourProfile={ourProfile} /> */}
          {/* RIGHT COL - PROFILE INFO WIDGETS */}
          <StickyBox offsetTop={70} offsetBottom={0}>
            <ProfileBodyWidgets profile={profile} />
          </StickyBox>
        </div>
      </Fragment>
    )
};

export default ProfileBody
