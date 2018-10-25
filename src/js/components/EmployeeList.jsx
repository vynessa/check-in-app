import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import firebaseApp from '../../../config/firebase.js';

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentWillMount() {
    const employeeRef = firebaseApp.database().ref('employees')
    employeeRef.orderByKey().once('value').then((employee) => {
      let employeeObjs = [];
      let _employee = employee.val();
      
      for (let index in _employee) {
        _employee[index].key = index
        employeeObjs.push(_employee[index]);
      }

      this.setState({
        employees: employeeObjs
      });
    });
  }

  setEmployeeName = (employeeName) => {
    localStorage.setItem('employee', employeeName)
  }

  render () {
    const {
      employees
    } = this.state

    const renderEmployees = employees.map((employee, index) => {
      return (
        <li className="employee-card shadow" key={`employee-${index+1}`}>
          <div className="card-body" >
            <div className="row">
              <div className="col-12 col-md-6 detail">
                <h6 className="title fat-text">{employee.name}</h6>
              </div>
              <div className="col-12 col-md-6 detail">
                <p className="description">{employee.email}</p>
              </div>
              <div className="col-12 col-md-6 detail">
                <p className="description">{employee.role}</p>
              </div>
              <div className="col-12 col-md-6 detail">
                <Link 
                  to="/email-success" className="button-pink" 
                  onClick={() => {this.setEmployeeName(employee.name)}}>
                  Send an email
                </Link>
              </div>
            </div>
          </div>
        </li>
      )
    });

    return (
      <section className="container employee-container">
        <h2 className="employee-header">View all employees</h2>
        <ul className="employee-list">
          {renderEmployees}
        </ul>
      </section>
    );    
  }
}

export default EmployeeList;
