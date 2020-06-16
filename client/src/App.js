import React from 'react';
import Home from './components/Home'
import Postdetail from './components/Postdetail'
import PostCreate from './components/PostCreate'
import './App.css';
import { Route, Switch } from 'react-router-dom';


const App = () => {

 return (
  <div className="app">
   <Switch>
    <Route exact path='/' component={Home} />
    <Route path="/add-post" component={PostCreate} />
    <Route path="/postdetail/:title" exact render={(props) => <Postdetail />} />
    <Route path="/postcreate/:title" exact component={PostCreate} />
   </Switch>
  </div>
 );
}

export default App;