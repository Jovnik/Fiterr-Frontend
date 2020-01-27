import React from 'react'
import { Link } from 'react-router-dom';

import stockIMG from '../assets/media/stockIMG.jpg'


const SearchPageItem = ({ page }) => {
    const { pageHandle, pageTitle, displayImage } = page;

    // console.log(page);

    let imgSrc = stockIMG;
    if(displayImage) { imgSrc = displayImage };

    return (
        <div className="search-item-result">
            <img src={imgSrc} style={{ height: '100%', borderRadius: '50%'}} alt=""/>
            <Link to={`/page/${pageHandle}`}>{pageTitle} {`[@${pageHandle}]`}</Link>
        </div>
    )
}

export default SearchPageItem
