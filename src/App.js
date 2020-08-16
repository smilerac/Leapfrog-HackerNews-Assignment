import React from 'react';
import { Route, Switch } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
//components
import topNews from './components/topNews/topNews.js';
// import newNews from './components/newNews.js';
// import bestNews from './components/bestNews.js';
// import store from './redux/store.js';
import store from './redux/store';



class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <Switch>
            <Route path="/top" component = {topNews} />
            {/* <Route path="/new" component={newNews} />
            <Route path="/best" component={bestNews} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
