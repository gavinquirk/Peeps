import decode from 'jwt-decode';

// Log in user and receive token
logIn = (email, password) => {
  Axios.post('http://localhost:5000/api/v1/auth/login', {
    email,
    password
  }).then(res => {
    const token = 'Bearer ' + res.data.token;
    this.setState({ token });
  });
};

logIn = (email, password) => {
  return this.fetch(`http://localhost:5000/api/v1/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => {
    this.setToken(res.token);
    return Promise.resolve(res);
  });
};

// Check if token exists and is valid
loggedIn = () => {
  const token = this.getToken();
  return !!token && !this.isTokenExpired(token);
};

// Decode token and determine if expired
isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Save token to local storage
setToken = token => {
  localStorage.setItem('token', token);
};

// Get token from local storage
getToken = () => {
  return localStorage.getItem('token');
};

// Logout and remove token
logout = () => {
  localStorage.removeItem('token');
};

// Decode token
getConfirm = () => {
  let answer = decode(this.getToken());
  return answer;
};

// Handle requests with added headers
fetch = (url, options) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  if (this.loggedIn()) {
    headers['Authorization'] = 'Bearer ' + this.getToken();
  }

  return fetch(url, {
    headers,
    ...options
  })
    .then(this._checkStatus)
    .then(response => response.json());
};

// Check for errors
_checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};
