import React, { Component } from 'react';
import axios from 'axios';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Form,
  FormGroup
} from 'reactstrap';

import './Login.css';

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
    // Retrieve submitted form data from state
    const email = this.state.email;
    const password = this.state.password;

    // Attempt Login
    axios
      .post(`/api/v1/auth/login`, {
        email,
        password
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className='Login'>
        <div className='login-container'>
          <h1>Login</h1>
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='fas fa-envelope'></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type='email'
                  name='email'
                  id='emailInput'
                  placeholder='email'
                  onChange={e => this.onChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='fas fa-key'></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type='password'
                  name='password'
                  id='passwordInput'
                  placeholder='password'
                  onChange={e => this.onChange(e)}
                />
              </InputGroup>
            </FormGroup>
            <Button color='primary' onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
