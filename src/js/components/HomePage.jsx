import React, { Component } from 'react';
import { GoogleButton } from 'react-materialize';
import firebaseApp from '../../../config/firebase.js';

const provider = new firebase.auth.GoogleAuthProvider();

class HomePage extends Component {
  state = {
    user: null
  };

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({
      user
    });
  }

  login = () => {
    firebaseApp.auth().signInWithPopup(provider).then((result) => {
      console.log(result)
      localStorage.setItem('user', JSON.stringify(result.user));
      // this.setState({
      //   user: result.user
      // }) 
      console.log('user', this.state.user)
    }).catch((error) => {
      return error
    });
  }

  signOut = () => {
    firebaseApp.auth().signOut().then(() => {
      // localStorage.removeItem('user');
      // location.reload();
      // this.setState({
      //   user: null
      // }) 
    }).catch((error) => {
      return error
    });
  }
  

  render() {
    return (
      <div>
        <div className="container welcome-text">
          <div className="welcome-details">
            <h2 className="heading">Welcome Here</h2>
            <p>View our employees list</p>
            <button className="button-pink">Sign in with google</button>
          </div>
        </div>  
      </div>
    );
  }
};


export default HomePage;

