import React, { Component } from 'react';
import Axios from 'axios';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

export default class PeopleBox extends Component {
  state = {
    profiles: null,
    token: null,
    user: null
  };

  componentDidMount() {
    // Hardcoded email and password
    const email = 'mary@email.com';
    const password = '123456';

    // Log in user with email and password
    this.logIn(email, password);

    // Get all profiles from API
    this.getAllProfiles();
  }

  logIn = (email, password) => {
    Axios.post('http://localhost:5000/api/v1/auth/login', {
      email,
      password
    }).then(res => {
      const token = 'Bearer ' + res.data.token;
      this.setState({ token });
    });
  };

  getCurrentUser = token => {
    console.log(token);

    const headers = {
      authorization: token,
      test: 'test'
    };

    Axios.get('http://localhost:5000/api/v1/auth/me', { headers }).then(
      user => {
        this.setState(user);
      }
    );
  };

  getAllProfiles = () => {
    Axios.get('http://localhost:5000/api/v1/profiles').then(res => {
      this.setState({ profiles: res.data.data });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className='PeopleBox'>
        <h1>TEST</h1>
      </div>
    );
  }
}
