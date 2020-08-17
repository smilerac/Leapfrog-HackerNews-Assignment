import React from 'react';
import {updateEachNews, updateTopNews} from '../../redux/action';
import { connect } from 'react-redux';
import './singleNews.css';



class singleNews extends React.Component{

    constructor(state){
        super(state)
        this.state = {newsItem: {}}
    }

    componentDidMount(){
        const eachNewsID = this.props.id
        // debugger;
        // const checkRepeat = this.props.eachNews.filter(item => item.id !==eachNews.id)
        const newsObject = this.props.eachNews.filter(each => each.id === eachNewsID)
        console.log('newsobject',newsObject)
        if (newsObject.length > 0){
            console.log('yup')
            this.setState({
                newsItem : newsObject[0]
                
            })
            // console.log('yup')
        }
        else{
            console.log('else filter')
        // }

        // }else{
        // console.log('id',this.props.id)
        // fetch(`https://hacker-news.firebaseio.com/v0/item/${eachNewsID}.json?print=pretty`)
            fetch(`https://hacker-news.firebaseio.com/v0/item/${eachNewsID}.json?print=pretty`)
            .then(response => {
                // console.log('single response',response)
                return response.json()   //conversion to json
            }).then(eachNews => {
                // console.log('single news data',{eachNews});

                // const checkRepeat = this.props.eachNews.filter(item => item.id !==eachNews.id)

                this.props.updateEachNews(eachNews);
                this.setState({
                    newsItem : eachNews
                })
            })
        }
    }

    render(){
        console.log('single news',this.props.eachNews)

        // if(Object.keys(this.state.newsItem).length === 0){
        //     return null
        // }else{
            
        return( 
            <div className = 'sg-container-wrapper'>
                {/* {this.props.eachNews.title} */}
                {/* {this.props.eachNews.map(eachNewsStory => <div>{eachNewsStory.title} </div>)} */}
                <div className ='left-container'>
                    <div className = 'title-container'>Title: {this.state.newsItem.title}</div>
                    <div className = 'by-container'>By: {this.state.newsItem.by}</div>
                </div>
                <a href = {this.state.newsItem.url}>More info</a>
            </div>
        )
    // }
    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateEachNews: (newsEach) => dispatch(updateEachNews(newsEach))
    }
}

const mapStateToProps = state =>{
    // console.log('value of state',state.singleNews.title)
    // console.log('value of state.single news',state.singleNews)
    return{
        eachNews:state.singleNews
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(singleNews);