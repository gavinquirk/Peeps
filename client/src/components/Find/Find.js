import React, { Component } from 'react';
import LoadingSpinner from '../layout/LoadingSpinner';

import axios from 'axios';

class Find extends Component {
  state = {
    loading: false,
    userProfiles: []
  };

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = () => {
    this.setState({ loading: true });

    // Temporary hard coded user coords
    const userCoords = [-117.310349, 33.1009];

    // Find users within radius
    axios
      .get(`/api/v1/profiles/${userCoords[0]}/${userCoords[1]}`)
      .then(res => {
        // console.log(res.data.data);
        this.setState({ userProfiles: res.data.data, loading: false });
      });
  };

  render() {
    const profilesList = this.state.userProfiles.map(profile => (
      <ul className='profiles-list list-group' key={profile._id}>
        <li className='profile-item list-group-item'>
          <div className='row p-4'>
            <div className='col-sm-6 text-center'>
              <i className='far fa-user fa-10x'></i>
            </div>
            <div className='col-sm-6 text-center mt-4'>
              <h4>{profile.name}</h4>
            </div>
          </div>
        </li>
      </ul>
    ));

    return (
      <div className='Find'>
        <h1>Find</h1>
        <input
          className='form-control mb-4'
          type='text'
          placeholder='Search'
          aria-label='Search'
        />
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <div className='userProfiles'>{profilesList}</div>
        )}
      </div>
    );
  }
}

export default Find;
