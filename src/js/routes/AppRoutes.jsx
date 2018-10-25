import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import EmployeeList from '../components/EmployeeList';
import DisplayEmail from '../components/DisplayEmail';
import ErrorPage from '../components/ErrorPage';

const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user ? true : false; 
};

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() ? <Component {...props}/> : <Redirect to='/'/>
  )}/>
);

const TriggerRedirect = () => (
  localStorage.user ? <Redirect to="/employees"/> : <HomePage />
)

const AppRoutes = ({auth}) => (
  <Router>
    <Route path="/" component={Layout}/>
    <Route exact path="/" component={TriggerRedirect}/>
    <PrivateRoute path="/employees" component={EmployeeList}/>
    <PrivateRoute path="/email-success" component={DisplayEmail}/>
  </Router>
);

export default AppRoutes;
