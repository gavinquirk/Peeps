import React, { Component } from 'react';
import Axios from 'axios';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

export default class PeopleBox extends Component {
  componentDidMount() {
    // Log In User
    Axios.post('http://localhost:5000/api/v1/auth/login', {
      email: 'mary@email.com',
      password: '123456'
    }).then(res => {
      const token = 'Bearer ' + res.data.token;
      this.getCurrentUser(token);
    });

    // Get All Profiles
    Axios.get('http://localhost:5000/api/v1/profiles').then(res => {
      console.log(res);
    });
  }

  getCurrentUser(token) {
    console.log(token);

    const headers = {
      authorization: token,
      test: 'test'
    };

    Axios.get('http://localhost:5000/api/v1/auth/me', { headers }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}
