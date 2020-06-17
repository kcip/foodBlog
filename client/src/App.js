import React from 'react';
import Home from './components/Home'
<<<<<<< HEAD
import Postdetail from './components/Postdetail'
=======
import PostDetail from './components/Postdetail'
>>>>>>> 46f6f6c2f16cf20bd61d388fe47ab569a4733830
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import './App.css';
import { Route, Switch } from 'react-router-dom';


const App = () => {

  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Home} />
<<<<<<< HEAD
        <Route path="/postcreate" component={PostCreate} /> 
        <Route exact path="/:id" component={Postdetail} />

        {/* {/* <Route path="/add-post" component={PostCreate} /> */}

=======
        <Route exact path="/add-post" component={PostCreate} />
        <Route exact path="/:id" component={PostDetail} />
        <Route exact path="/:id/edit" component={PostEdit} />


        {/* <Route path="/postcreate/:title" exact component={PostCreate} />  */}
>>>>>>> 46f6f6c2f16cf20bd61d388fe47ab569a4733830
      </Switch>
    </div>
  );
}

export default App;