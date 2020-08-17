import React from 'react';
import './home.css';



class home extends React.Component{


    render(){
        return(
            <div className='home-container'>
                <h3>Welcome to Hacker News!</h3>
                <p>We have tons of stories here. Go ahead and explore the contents through the navigation bar above.</p>
                <h3>Happy browsing!</h3>
            </div>
        )
    }
}


export default home;