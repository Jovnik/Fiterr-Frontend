import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import stockIMG from '../assets/media/stockIMG.jpg'

import PageContext from '../../context/page/pageContext';

const PageLeftNav = () => {

    // eslint-disable-next-line
    // const [section, setSection] = useState('Home')

    const { currentPage: { displayImage, pageHandle, pageTitle }, setSection } = useContext(PageContext);

    return (
      <div className="col-social-nav">
        <div className="page-image-wrapper">
          <div className="page-image-border">
            <div className="page-image">
              <img src={ displayImage ? displayImage : stockIMG } alt="Profile"/>
              <div className="image-update">
                <i className="fas fa-camera"></i>
                <h3>update</h3>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION - NAV SHORTCUTS */}
        <div className="nav-item-wrapper page-title-handle">
          <div className="nav-item page-title">
            <h1> { pageTitle } </h1>
          </div>
          <div className="nav-item page-handle">
            <h3> @{pageHandle} </h3>
          </div>
        </div>
        {/* <Link to={`${url}/dashboard`}  className="page-nav-item-wrapper"> */}
        <Link to={`#`} onClick={() => setSection('home')} className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> home </h3>
          </div>
        </Link>
        <Link to={`#`} onClick={() => setSection('about')} className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> about </h3>
          </div>
        </Link>
        <Link to={`#`} onClick={() => setSection('services')} className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> services </h3>
          </div>
        </Link>
        <Link to={`#`} onClick={() => setSection('trainers')} className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> trainers </h3>
          </div>
        </Link>
        <Link to={`#`} onClick={() => setSection('photos')} className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> photos </h3>
          </div>
        </Link>
      </div>
    )
};
export default PageLeftNav