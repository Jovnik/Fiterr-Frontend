import React, { Fragment, useContext, useState } from 'react'
import ProfileContext from '../../context/profile/profileContext';
import { useHistory } from 'react-router-dom';
// import { useRouteMatch } from 'react-router';

const UpdateInfo = () => {

    // const { user, isAuthenticated, loadUser } = useContext(AuthContext);
    const { profile: { user, aboutMe: aboutMeInfo, fitnessInterests: fitnessInterestsInfo }, editProfile } = useContext(ProfileContext); 
    
    console.log('THA profile', user);

    const history = useHistory();
    // const { path, url } = useRouteMatch();

    const [profile, setProfile] = useState({
        aboutMe: aboutMeInfo,
        fitnessInterests: fitnessInterestsInfo,
        image: null,
        coverImage: null
    })
    const { aboutMe, fitnessInterests, image, coverImage } = profile;

    const onSubmit = async(e) => {
        e.preventDefault();

        let body = new FormData();
        body.append('aboutMe', aboutMe)
        body.append('fitnessInterests', fitnessInterests)
        body.append('image', image)
        body.append('coverImage', coverImage)

        editProfile(body, history, user.username);
        // history.push(url);
    }

    const onChange = (e) => {
        setProfile({...profile, [e.target.name]: e.target.value })
    }

    const onFileChange = (e) => {
        setProfile({...profile, [e.target.name]: e.target.files[0]})
    }

    return(
        <Fragment>
            <section className="body">
                <div className="image-overlay">
                    <div className="container">
                        <div className="form-container">
                            <h1>Edit your profile!</h1>
                            <form className="signup" encType="multipart/form-data" name="file-upload" onSubmit={onSubmit}>
                                <div>
                                    {/* <label >About You!(Hobbies, interests, etc.)</label> */}
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="text" name="aboutMe" id="aboutMe" onChange={onChange} value={aboutMe} placeholder="About You"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="textarea" name="fitnessInterests" id="fitnessInterests" value={fitnessInterests} onChange={onChange} placeholder="Fitness Interests"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <label >Profile Image</label>
                                            <input type="file" name="image" id="image" onChange={onFileChange}/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <label >Cover Image</label>
                                            <input type="file" name="coverImage" id="coverImage" onChange={onFileChange}/>
                                        </div>
                                    </div>
                                 
                                    
                                    <div className="field-row button">
                                        <button type="submit" value="Submit">Submit</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </Fragment>
    )
}

export default UpdateInfo
