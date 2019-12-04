import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // Check if passwords match
    if (this.state.password !== this.state.password2) {
      alert('Your passwords do not match');
    } else {
      console.log(this.state);
    }
  };

  render() {
    const { name, email, password, password2 } = this.state;

    return (
      <div className='Register'>
        <h1>Register</h1>
        <form className='form' onSubmit={e => this.onSubmit(e)}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter your name'
              value={name}
              onChange={e => this.onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              name='email'
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={e => this.onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              className='form-control'
              id='password'
              placeholder='Enter your password'
              minLength='5'
              value={password}
              onChange={e => this.onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password-2'>Confirm Password</label>
            <input
              name='password2'
              type='password'
              className='form-control'
              id='password2'
              placeholder='Confirm your password'
              minLength='5'
              value={password2}
              onChange={e => this.onChange(e)}
              required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
      </div>
    );
  }
}
