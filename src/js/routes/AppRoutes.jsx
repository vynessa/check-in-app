/* global location localStorage*/
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from '../components/Layout';
import EmployeeList from '../components/EmployeeList';

const AppRoutes = () => (
    <Router >
      <Route path="/" component={Layout}/>
      <Route path="/employees" component={EmployeeList}/>
    </Router>
);

export default AppRoutes;
