//BaseComponent
import React, {Component} from 'react';
import Books from './Books';
import BookShow from './BookShow';
import BookEdit from './BookEdit';
import BookNew from './BookNew';
import SubNavBar from './SubNavBar';
import BookRead from './BookRead';
import User from './AccountComponents/User';

//router
import {Switch, Route} from 'react-router-dom'


const ClientHome = () => {
  return(
    <div>
      <SubNavBar />
      <Switch>
        <Route exact strict path="/" component={Books} />
        <Route path="/book/new/" component={BookNew} exact strict />
        <Route path="/book/:id/edit" component={BookEdit} exact strict />
        <Route path="/read/:id/" component={BookRead} exact />
        <Route path="/book/:id/" component={BookShow} exact />
        <Route path="/user/:id/" component={User} />
      </Switch>
    </div>
  )
}

export default ClientHome;
