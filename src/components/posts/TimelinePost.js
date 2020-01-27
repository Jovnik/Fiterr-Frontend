import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import PostComment from './PostComment';
import NewComment from './NewComment';

import stockIMG from '../assets/media/stockIMG.jpg';


// contexts
import ProfileContext from '../../context/profile/profileContext';
import PostContext from '../../context/post/postContext';

import { likesText } from '../../utils/Utils';


const TimelinePost = ({ post: { _id, content, image, date, comments, likes, postOwnerUser }}) => {

    const { _id: userId, firstname, lastname, profile: { displayImage }} = postOwnerUser;

    const dropdownEl = useRef(null);
    const { like, unlike, removePost, editPost } = useContext(PostContext);
    const { profile: myprofile } = useContext(ProfileContext);

    // check if we have liked it or not
    const [liked, setLiked] = useState(likes.map(like => like.user).includes(myprofile.user._id));
    const [edit, toggleEdit] = useState(false);
    const [editText, setEditText] = useState(content);

    const onLikeClick = () => {
      if (liked) {
        unlike(_id);
        setLiked(false);
      } else {
        like(_id)
        setLiked(true);
      }
    }

    const onChange = (e) => {
      setEditText(e.target.value);
    }

    const onPostRemove = (e) => {
      removePost(_id);
      postOptionsDropdownRemove();
    }

    const onEditSubmit = (e) => {
      e.preventDefault();
      console.log('we saved the new stuff');
      editPost(_id, { editText });
      toggleEdit(false);
      postOptionsDropdownRemove();
    }

    const postOptionsDropdownHandler = (e) => {
      // console.log(dropdownEl);
      if (dropdownEl.current.style.display === "none") {
        dropdownEl.current.style.display = "flex";
      } else if (dropdownEl.current.style.display === "flex") {
        dropdownEl.current.style.display = "none";
      }
    };

    // eslint-disable-next-line
    const postOptionsDropdownRemove = (e) => {
      dropdownEl.current.style.display = "none";
    }

    return (
      <>
        <div className="timeline-post-wrapper">
          <div className="header">
            <div className="profile-image">
              <img src={displayImage ? displayImage : stockIMG} alt=""/>
            </div>
            <div className="post-info">
              <div className="post-title">
                <h3><Link to='/'>{`${firstname} ${lastname}`}</Link> <span>made a post</span></h3>
              </div>
              <div className="post-date">
                <div className="date">
                  <span> <Moment format='MMMM DD, YYYY [at] hh:mm A'>{date}</Moment> </span>
                </div>
                <div className="post-options">
                  <button type="button" value="post-options">
                    <i className="fas fa-globe-americas"></i>
                    <i className="fas fa-caret-down"></i>
                  </ button>
                </div>
              </div>
            </div>
            { myprofile.user._id === userId && 
              (<div className="post-options">
                {/* <button type="button" className="btn-post-options" onClick={postOptionsDropdownHandler} onBlur={postOptionsDropdownRemove} > */}
                <button type="button" className="btn-post-options" onClick={postOptionsDropdownHandler} >
                  <i className="fas fa-ellipsis-h"></i>
                </button>
                <div id="post-options-dropdown" ref={dropdownEl} style={{display: "none"}} className="options-dropdown-wrapper caret">
                  <div className="options-dropdown">
                    <ul>
                      <li onClick={() => toggleEdit(!edit)}>edit post</li>
                      <li onClick={onPostRemove}>delete post</li>
                    </ul>
                  </div>
                </div>
            </div>)}

          </div>
          <div className="body">
            <div className="post-content">
              {edit ? (
                <form>
                  <input type="text" name="" value={editText} onChange={onChange} id=""/>
                  <button onClick={onEditSubmit}>Save</button>
                </form>
              ) : (
                <span>
                  { content }
                </span>
              )}

              { image && (
                <div className="image-upload">
                  <img src={image} alt=""/>
                </div>
              )}
            </div>
          </div>

          <div className="post-actions-wrapper post-actions-info">
            <div className="social-actions">
              <div className="icon-wrapper like">
                <div className="icon-bgr">
                  <i className="far fa-thumbs-up"></i>
                </div>
                <span>{likesText(likes.length)}</span>
              </div>
              <div className="icon-wrapper comment">
                <div className="icon-bgr">
                  <i className="far fa-comment-alt"></i>
                </div>
                <span>{comments.length} comments</span>
              </div>
              <div className="icon-wrapper share">
                <div className="icon-bgr">
                  <i className="far fa-share-square"></i>
                </div>
                <span>3 shares</span>
              </div>
            </div>
          </div>
          <div className="post-actions-wrapper">
            <div className="social-actions">
              <button onClick={onLikeClick} type="button" className={`social-like liked-${liked}`} name="" value="social-like" >
                <i className="far fa-thumbs-up"></i>
                <span>{ liked ? 'liked' : 'like' }</span>
              </button>
              <button type="button" className="social-comment" name="" value="social-comment">
                <i className="far fa-comment-alt"></i>
                <span>comment</span>
              </button>
              <button type="button" className="social-share" name="" value="social-share">
                <i className="far fa-share-square"></i>
                <span>share</span>
              </button>
            </div>
          </div>
  
          <div className="post-comments-wrapper">
  
            
            {comments.map(comment => (
              <PostComment key={comment._id} comment={comment} postId={_id} />
            ))}

            <NewComment postId={_id} />

          </div>
        </div>
      </>
    )
}

export default TimelinePost
