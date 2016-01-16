import React from 'react';
import AppActions from '../actions/appActions'
import Form from './form';

export default class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Form/>
      </div>
    )
  }
}