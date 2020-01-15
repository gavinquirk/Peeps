import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Find from './components/Find/Find';
import Alert from './components/layout/Alert';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert />
            <Route exact path='/' component={Landing} />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/find' component={Find} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
