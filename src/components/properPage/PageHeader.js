import React, { useContext } from 'react'
import PageBodyServices from './PageBodyServices'
import PageBodyTimeline from './PageBodyTimeline';
import PageBodyAbout from './PageBodyAbout';
import PageBodyTrainers from './PageBodyTrainers';
import PageBodyPhotos from './PageBodyPhotos';
import coverImage from '../../components/assets/media/sports-bike.jpg';

import { useRouteMatch } from 'react-router-dom';

import PageContext from '../../context/page/pageContext';

const PageHeader = (props) => {
    const {currentPage, pageRole} = props

    const { path } = useRouteMatch();
    console.log('The path', path);

    const { section } = useContext(PageContext);
    console.log('the section is', section)

    return (
      <div className="col-profile">
        <div className="profile-header-container">
          <div className="cover-image-wrapper">
            <div className="cover-image">
              <div className="cover-image-gradient">
              </div>
              <div className="image-update">
                <i className="fas fa-camera"></i>
                <h3>update cover photo</h3>
              </div>
              <img src={coverImage} alt=""/>
            </div>
          </div>

          <div className="page-actions-container">
            <div className="page-actions-wrapper">
              <button type="button" value="">
                <i className="fas fa-rss"></i>
                <span> follow </span>
                <i className="fas fa-caret-down"></i>
              </ button>
            </div>
            
          </div>
        </div>


        {/* <Switch>
          <Route exact path={`${path}/dashboard`} component={PageBodyTimeline} />
          <Route exact path={`${path}/about`} component={PageBodyAbout} />
          <Route exact path={`${path}/services`} render={props => <PageBodyServices currentPage={currentPage} pageRole={pageRole} />} />
          <Route exact path={`${path}/trainers`} component={PageBodyTrainers} />
          <Route exact path={`${path}/photos`} component={PageBodyPhotos} />
          <Route exact path={`${path}/*`} component={PageBodyPhotos} />
        </Switch> */}

        { section==='home' && <PageBodyTimeline page={currentPage} />}
        { section==='about' && <PageBodyAbout />}
        { section==='services' && <PageBodyServices currentPage={currentPage} pageRole={pageRole}/> }
        { section==='trainers' && <PageBodyTrainers />}
        { section==='photos' && <PageBodyPhotos />}
      </div>
    )
};
export default PageHeader