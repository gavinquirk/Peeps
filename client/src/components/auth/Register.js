import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Form,
  FormGroup
} from 'reactstrap';

import './Register.css';

class Register extends Component {
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
    // Retrieve submitted data from state
    const { name, email, password, password2 } = this.state;
    // Check if passwords match
    if (password !== password2) {
      this.props.setAlert('Passwords do not match', 'danger');
    } else {
      this.props.register({
        name,
        email,
        password
      });
    }
  };

  render() {
    return (
      <div className='Register'>
        <div className='register-container rounded p-4'>
          <h1>Register</h1>
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='fas fa-signature'></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type='name'
                  name='name'
                  id='nameInput'
                  placeholder='name'
                  onChange={e => this.onChange(e)}
                />
              </InputGroup>
            </FormGroup>
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
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='fas fa-key'></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type='password'
                  name='password2'
                  id='password2Input'
                  placeholder='confirm password'
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Register);
