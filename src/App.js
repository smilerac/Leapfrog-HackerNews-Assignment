import React from 'react';
import { Route, Switch } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
//components
import topNews from './components/topNews/topNews.js';
import newNews from './components/newNews/newNews.js';
import bestNews from './components/bestNews/bestNews.js';
import home from './components/home/home.js';
// import store from './redux/store.js';
import store from './redux/store';
import Navbar from './components/navBar/navBar';




class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div className = 'main-container'>
            <Navbar/>
            <div className = 'container-wrapper'>
              <div className = 'container'>
                <Switch>
                  <Route path="/top" component = {topNews} />
                  <Route path="/new" component={newNews} />
                  <Route path="/best" component={bestNews} />
                  <Route path="/" component = {home} />
                </Switch>
              </div>
          </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
