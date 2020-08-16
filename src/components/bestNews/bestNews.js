import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updatebestNews} from '../../redux/action';
import SingleNews from '../singleNews/singleNews';
// ReactReduxContext; 


class bestNews extends React.Component{

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty') 
        // fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty?_limit=10', { headers: { range: 1-10} })   
        .then(response => {
          console.log('stuff coming in',{response});
    
          return response.json()   //conversion to json
        }).then(newsBest => {
            console.log('newsBest',{newsBest});
            newsBest = newsBest.slice(0, 5);   
            // newsBest[4] = newsBest[0]
            // console.log('newsBest after',newsBest); 
            this.props.updatebestNews(newsBest);
        })

        
      }

    render(){
        // console.log('props coming in yay',this.props.newsBest)
        return(
            <div>
                {this.props.newsBest.map(eachbestNewsID => <SingleNews id={eachbestNewsID}/>)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatebestNews: (newsBest) => dispatch(updatebestNews(newsBest))
    }
}

const mapStateToProps = state =>{
    // console.log('value of state.newsBest',state.bestNews)
    return{
        newsBest:state.bestNews
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (bestNews);