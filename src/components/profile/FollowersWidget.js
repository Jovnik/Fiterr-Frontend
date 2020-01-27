import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { createNumberArr } from '../../utils/Utils';

const FollowersWidget = ({ following }) => {

    const nEmpty = 9 - following.length;
    const numberArr = createNumberArr(nEmpty)

    return (
        <Fragment>
            <div className="body thumbnails">

                { following.map(userFollowing => (
                    <Link className="thumbnail-widget" key={userFollowing._id} to={`/${userFollowing.username}`}>
                            <img style={{width: '100%', height: '100%'}} src={userFollowing.profile.displayImage} alt='profile'/>
                    </Link>
                ))}

                {/* { following.map(userFollowing => (
                    <Link key={userFollowing._id} to={`/${userFollowing.username}`}>
                        <div className="thumbnail-widget">
                            <img style={{width: '100%', height: '100%'}} src={userFollowing.profile.displayImage}/>
                        </div>
                    </Link>
                ))} */}

                { numberArr.map(n => (
                    <div key={n} className="thumbnail-widget">
                        <i className="fas fa-user"></i>
                    </div>
                ))}
            
            </div>
        </Fragment>
    )
}

export default FollowersWidget
