import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='http://localhost:3000'>
          Peeps
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item '>
              <Link className='px-3 py-1 text-decoration-none text-dark' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item '>
              <Link
                className='px-3 py-1 text-decoration-none text-dark'
                to='/dashboard'
              >
                Dashboard
              </Link>
            </li>
            <li className='nav-item '>
              <Link
                className='px-3 py-1 text-decoration-none text-dark'
                to='/find'
              >
                Find
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='px-3 py-1 text-decoration-none text-dark'
                to='/login'
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='px-3 py-1 text-decoration-none text-dark'
                to='/register'
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
