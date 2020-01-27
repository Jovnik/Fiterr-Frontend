import React from 'react';
import { Link } from 'react-router-dom';

import stockIMG from '../assets/media/stockIMG.jpg'

const SearchItem = ({ user: {firstname, lastname, username, profile} } ) => {

    
    let imgSrc = stockIMG;
    if(profile && profile.displayImage) { imgSrc = profile.displayImage };
    
    console.log('RIP KOBE');

    // const { displayImage } = profile;
    // console.log('Search item user:', user);
    // const { username, _id } = user;

    return (
        <div className="search-item-result">
            <img src={imgSrc} style={{ height: '100%', borderRadius: '50%'}} alt=""/>
            <Link to={`/${username}`}>{firstname} {lastname}</Link>
        </div>
    )
}

export default SearchItem
