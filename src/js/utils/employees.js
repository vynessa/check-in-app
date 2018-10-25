import firebaseApp from '../../../config/firebase'
// var db = firebase.database();
// var ref = db.ref('/');

class Employees {
  static readEmployees () {
    let employeeRef = firebaseApp.database().ref('employees')
    employeeRef.orderByKey().once('value').then((employees) => {
      let employeeObjs = [];
      let _employee = employees.val();
      
      for (let x in _employee) {
        _employee[x].key = x
        employeeObjs.push(_employee[x]);
      }

      this.setState({
        employees: Employees.readEmployees()
      })
    });
    // return employeeObjs;
  }

  static getEmployee () {

  }

  static updateEmployee() {

  }

  static deleteeEmployee() {
    
  }
}

export default Employees;