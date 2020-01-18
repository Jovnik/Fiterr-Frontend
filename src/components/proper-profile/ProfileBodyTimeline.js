import React, { Fragment, useContext, useState, useEffect } from 'react';
import NewPost from './NewPost';
import MyPosts from './MyPosts';
import Spinner from '../layout/Spinner';

import { useParams } from 'react-router-dom';
import PostContext from '../../context/post/postContext';


const ProfileBodyTimeline = ({ profile, ourProfile }) => {

  const { user: { _id } } = profile;
  
  const postContext = useContext(PostContext);
  const { myPosts, getMyPosts, otherPosts, getOtherPosts, clearPostState } = postContext;
  
  // const { username } = useParams();
  // const [ourProfile, setOurProfile] = useState((username === myusername));

  useEffect(() => {
    console.log('useEffect');
    if(ourProfile) { getMyPosts() } else { getOtherPosts(_id) };

    return () => {
      console.log('unmounting of the PROFILE BODY TIMELINE component')
      // clearOtherPosts();
      clearPostState();
    }
  }, [])

  if ((ourProfile && !myPosts) || (!ourProfile && !otherPosts)) {
    
    console.log('in the loading part');
    // debugger
    // if youre on someone elses profile, and then click on your profile in the nav menu, it gets stuck here
    return (
      <Fragment>
        <h1>Loading posts...</h1>
        <Spinner />
      </Fragment>
    )
  } else {

    if (ourProfile) {
      console.log('ourposts', myPosts)
    } else {
      console.log('other posts', otherPosts)
    }

    return(
      <Fragment>
      {/* LEFT COL - PROFILE TIMELINE */}
        <div className="timeline-wrapper">
          
          <NewPost />

          <MyPosts profile={profile} posts={ourProfile ? myPosts : otherPosts} />

        </div>
      </Fragment>
    )
  }
};

export default ProfileBodyTimeline
