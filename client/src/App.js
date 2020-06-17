import React from 'react';
import Home from './components/Home'
import PostDetail from './components/Postdetail'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import './App.css';
import { Route, Switch } from 'react-router-dom';


const App = () => {

  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/add-post" component={PostCreate} />
        <Route exact path="/:id" component={PostDetail} />
        <Route exact path="/:id/edit" component={PostEdit} />


        {/* <Route path="/postcreate/:title" exact component={PostCreate} />  */}
      </Switch>
    </div>
  );
}

export default App;