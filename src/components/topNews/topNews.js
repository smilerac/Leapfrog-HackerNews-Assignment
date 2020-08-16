import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {topShow, updateTopNews} from '../../redux/action';
import SingleNews from '../singleNews/singleNews';
// ReactReduxContext; 


class topNews extends React.Component{

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty') 
        // fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty?_limit=10', { headers: { range: 1-10} })   
        .then(response => {
          console.log('stuff coming in',{response});
    
          return response.json()   //conversion to json
        }).then(newsTop => {
            console.log('newsTop',{newsTop});
            this.props.updateTopNews(newsTop);
        })
      }

    render(){
        console.log('props coming in yay',this.props.newsTop)
        return(
            <div>
                {this.props.newsTop.map(eachTopNewsID => <SingleNews id={eachTopNewsID}/>)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTopNews: (newsTop) => dispatch(updateTopNews(newsTop))
    }
}

const mapStateToProps = state =>{
    console.log('value of state.newstop',state.topNews)
    return{
        newsTop:state.topNews
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (topNews);