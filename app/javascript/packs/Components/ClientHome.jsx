//BaseComponent
import React, {Component} from 'react';
import Books from './Books';
import BookShow from './BookShow';
import BookEdit from './BookEdit';
import BookNew from './BookNew';
import SubNavBar from './SubNavBar'


//router
import {Switch, Route} from 'react-router-dom'

class ClientHome extends Component{
  render(){
    return(
      <div>
        <SubNavBar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/book/new/" component={BookNew} exact strict />
          <Route path="/book/edit/:id" component={BookEdit} exact strict />
          <Route path="/book/:id/" component={BookShow} />
        </Switch>
      </div>
    )
  }
}

export default ClientHome;
