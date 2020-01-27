import React, { useState, useContext } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import PostContext from '../../context/post/postContext';
import ProfileContext from '../../context/profile/profileContext';

import stockIMG from '../assets/media/stockIMG.jpg'


const NewComment = ({ postId, page }) => {

    
    const { addComment } = useContext(PostContext);
    const { profile: { displayImage } } = useContext(ProfileContext);

    let img;
    if(page){
        if(page.displayImage) { img = page.displayImage }
        else { img = stockIMG }
    } else {
        if(displayImage) { img = displayImage }
        else { img = stockIMG }
    }
    
    const [text, setText] = useState('');

    const onSubmitComment = e => {
        console.log({ text });
        e.preventDefault();
        addComment(postId, { text });
        setText('');
    }

    return (
        <div className="post-comment-form-wrapper">
            <div className="post-comment-form">
            <div className="form-image">
                <img src={img} alt=""/>
            </div>
            <div className="form-field">
                <form>
                    <TextareaAutosize type="textarea" autoComplete="off" className="comment-field" value={text} placeholder="Write a new comment ..." onChange={e => setText(e.target.value)}/>
                    <button onClick={onSubmitComment} type="submit" label="search" className="comment-btn"> post </button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default NewComment
