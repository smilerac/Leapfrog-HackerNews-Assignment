import React from 'react';
import './navbar.css';
import { Link} from 'react-router-dom';
import topNewsIcon from '../../img/top-news.png';
import bestNewsIcon from '../../img/best-news.png';
import newNewsIcon from '../../img/new-news.png';
import logo from '../../img/logo.png';


function Navbar(props) {
  return (
    <div className="navigation-bar-container">
        <Link to={`/`} >
        <div className="home-icon">
                <img src= {logo} alt='' className= "top-news-icon"/>
            </div>
        </Link>
        <div className="navigation-bar">

            <Link to={`/top`} >
            <div className="top-icon">
                <img src= {topNewsIcon} alt='' className= "top-news-icon"/>
                <h2 className = 'top-news'>Top Stories</h2>
                </div>
            </Link>
           
            <Link to={`/best`} >
                <div className="best-icon">
                    <img src={bestNewsIcon} alt='' className= "best-news-icon"/>
                    <h2 className = 'best-news'>Best Stories</h2>
                </div>
            </Link>

            <Link to={`/new`} >
                <div className="new-icon">
                    <img src={newNewsIcon} alt='' className= "new-news-icon"/>
                    <h2 className = 'new-news'>New Stories</h2>
                </div>
                </Link>

        </div>
    </div>
  );
}

export default Navbar;


