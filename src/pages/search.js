import React, { Fragment, useContext, useState } from 'react';

import SearchContext from '../context/search/searchContext';
import SearchItem from '../components/search/SearchItem';
import SearchPageItem from '../components/search/SearchPageItem';
import Spinner from '../components/layout/Spinner';

const Search = (props) => {

  const [search, setSearch] = useState('');
  const [checkedOption, setCheckedOption] = useState('all');

  console.log(checkedOption);
  const onChecked = (e) => {
    setCheckedOption(e.target.value);
  }

  const searchContext = useContext(SearchContext);
  const { searchedUsers, searching, searchUsers } = searchContext;
  // const querySearch = props.location.search.toString().split('=')[1];


  const onSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    searchUsers(search, checkedOption);
  }

  return (
    <Fragment>
        
      <div className="search-section">
        <div className="search-bar">
          <form onSubmit={searchFormSubmit} className="jov-search-form">
            <input onChange={onSearch} value={search} type="text" className="search-input-field" placeholder="search" />
            <button type="submit" label="search" className="search-button"><i className="fas fa-search"></i></button>
          </form>
          <div className="filter-options">
            <div className="jov-btn-radio">
              <div>Filter by</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="all" autoComplete="off" required checked={checkedOption==='all'} onChange={onChecked}/>
              <div>All</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="enthusiast" autoComplete="off" required checked={checkedOption==='enthusiast'} onChange={onChecked}/>
              <div>Enthusiast</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="page" autoComplete="off" required checked={checkedOption==='page'} onChange={onChecked}/>
              <div>Page</div>
            </div>
          </div>

        </div>
      </div>

      <div className="jov-container">
        <div className="jov-results">

          {searching ? (<Spinner/>) : 
            (searchedUsers.map((result, index) => {
              if(!result.pageOwner) {
                return <SearchItem key={index} user={result} />
              } else {
                return <SearchPageItem key={index} page={result} />
              }
            }))
          }

        </div>
      </div>
      
    </Fragment>
  )
}


export default Search;
