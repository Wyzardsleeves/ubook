// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ClientHome from './Components/ClientHome'
import {HashRouter} from 'react-router-dom'

//Beginning of modal
import Modal from 'react-modal';

Modal.setAppElement(document.body);
//End of modal

const Hello = props => (
  <div className="container">Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <ClientHome />
    </HashRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
