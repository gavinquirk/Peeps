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
          <h6>{profile.name}</h6>
        </li>
      </ul>
    ));

    return (
      <div className='Find'>
        <h1>Find</h1>
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
