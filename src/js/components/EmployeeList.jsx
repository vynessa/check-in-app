import React, { Component } from 'react';
import firebaseApp from '../../../config/firebase.js';

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentWillMount() {
    let employeeRef = firebaseApp.database().ref('employees')
    employeeRef.orderByKey().once('value').then((employees) => {
      let employeeObjs = [];
      let _employee = employees.val();
      
      for (let x in _employee) {
        _employee[x].key = x
        employeeObjs.push(_employee[x]);
      }
      
      this.setState({
        employees: employeeObjs
      })
    });
  }

  render () {
    const {
      employees
    } = this.state

    const renderEmployees = employees.map((employee, index) => {
      return (
        <section className="container" key={`employee-${index+1}`}>
          <ul className="employee-list">
            <li className="employee-card shadow">
              <a className="card-body" >
                <div className="row">
                  <div className="col-12 col-md-6 detail">
                    <h6 className="title fat-text">{employee.name}</h6>
                    <p className="description">{employee.email}</p>
                    <p className="description">{employee.role}</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
      )
    });

    return [
      renderEmployees
    ]
  }
}

export default EmployeeList;
