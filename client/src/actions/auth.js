import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  // Set HTTP Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Convert body to JSON
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/v1/auth/register', body, config);
    // console.log('Register Response');
    // console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
