import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/find' className='btn btn-primary'>
          Find
        </Link>
      </div>
    );
  }
}

export default Dashboard;
