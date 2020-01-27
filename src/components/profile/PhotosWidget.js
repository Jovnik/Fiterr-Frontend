import React, { Fragment } from 'react'
import { createNumberArr } from '../../utils/Utils';

const PhotosWidget = ({ images }) => {

    const nEmpty = 9 - images.length;
    const numberArr = createNumberArr(nEmpty)

    return (
        <Fragment>
            
            <div className="body thumbnails">

                { images.map((image, index) => (
                    <div className="thumbnail-widget" key={index}>
                        <img style={{width: '100%', height: '100%'}} src={image} alt='profile'/>
                    </div>
                ))}

                { numberArr.map(n => (
                    <div key={n} className="thumbnail-widget">
                        <i className="fas fa-camera"></i>
                    </div>
                ))}
            
            </div>
        </Fragment>
    )
}

export default PhotosWidget
