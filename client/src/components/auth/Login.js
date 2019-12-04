import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('Your credentials have been submitted...');
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='Login'>
        <h1>Login</h1>
        <form className='form' onSubmit={e => this.onSubmit(e)}>
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
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
      </div>
    );
  }
}
