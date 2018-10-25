import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import EmployeeList from '../components/EmployeeList';
import DisplayEmail from '../components/DisplayEmail';

const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user ? true : false; 
};

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() ? <Component {...props}/> : <Redirect to='/'/>
  )}/>
);

const AppRoutes = ({auth}) => (
  <Router>
    <Route path="/" component={Layout}/>
    <Route exact path="/" component={HomePage}/>
    <PrivateRoute path="/employees" component={EmployeeList}/>
    <PrivateRoute path="/email-success" component={DisplayEmail}/>
  </Router>
);

export default AppRoutes;
