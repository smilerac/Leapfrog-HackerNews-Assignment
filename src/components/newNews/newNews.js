import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateNewNews} from '../../redux/action';
import SingleNews from '../singleNews/singleNews';
// ReactReduxContext; 


class newNews extends React.Component{

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty') 
        // fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty?_limit=10', { headers: { range: 1-10} })   
        .then(response => {
          console.log('stuff coming in',{response});
    
          return response.json()   //conversion to json
        }).then(newsNew => {
            console.log('newsNew',{newsNew});
            newsNew = newsNew.slice(0, 5);   
            // newsNew[4] = newsNew[0]
            // console.log('newsNew after',newsNew); 
            this.props.updateNewNews(newsNew);
        })

        
      }

    render(){
        // console.log('props coming in yay',this.props.newsNew)
        return(
            <div>
                {this.props.newsNew.map(eachNewNewsID => <SingleNews id={eachNewNewsID}/>)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewNews: (newsNew) => dispatch(updateNewNews(newsNew))
    }
}

const mapStateToProps = state =>{
    // console.log('value of state.newsNew',state.newNews)
    return{
        newsNew:state.newNews
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (newNews);