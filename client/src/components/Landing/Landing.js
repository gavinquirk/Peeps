import React, { Component } from 'react';

import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <div className='landing-container rounded p-4'>
          <h1>Welcome to Peeps</h1>
          <i className='far fa-grin-beam fa-10x text-primary'></i>
        </div>
      </div>
    );
  }
}
