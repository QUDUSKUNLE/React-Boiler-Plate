import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './App';
import Home from './Home';

class Routes extends React.Component{
  render(){
    return (
        <Route path="/" component ={App}>
          <IndexRoute component= {Home}/>
        </Route>
    )
  }
};

export default Routes;