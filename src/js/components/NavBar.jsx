import React from 'react';
import {
  Container, Row, Col, Navbar, Nav,
  NavLink, NavItem, NavbarBrand
} from 'reactstrap';
import firebase from 'firebase'
import firebaseApp from '../../../config/firebase.js';

const provider = new firebase.auth.GoogleAuthProvider();

class NavBar extends React.Component {
  state = {
    user: null,
    isAuthenticated: false
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({
      user
    });
  }

  signIn = () => {
    firebaseApp.auth().signInWithPopup(provider).then((result) => {
      localStorage.setItem('user', JSON.stringify(result.user));
      this.setState({
        user: result.user,
        isAuthenticated: true
      }) 
      location.reload();
    }).catch((error) => {
      return error
    });
  }

  logout = () => {
    firebaseApp.auth().signOut().then(() => {
      localStorage.clear();
      this.setState({
        user: null,
        isAuthenticated: false
      }) 
      location.reload();
    }).catch((error) => {
      return error
    });
  }

  render() {
    const { user } = this.state
    return (
      <header>
      <Navbar fixed="top" color="light" light expand="xs" className="bg-red" style={{ height: 80 }}>
        <Container>
          <Row noGutters className="position-relative w-100 align-items-center">
            <NavbarBrand href="/">Check In App</NavbarBrand>
            <Col className="d-none d-lg-flex justify-content-end">
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-thin" href="/">Home</NavLink>
                </NavItem>
              </Nav>
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-thin" href="/">About</NavLink>
                </NavItem>
              </Nav>
              <Nav className="mrx-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-thin" href="/">Contact Us</NavLink>
                </NavItem>
              </Nav>
              {
                user == null 
                ?
                  <Nav className="mrx-auto" navbar>
                    <NavItem className="d-flex align-items-center">
                      <button className="button-pink" onClick={this.signIn}>Sign in with google</button>
                    </NavItem>
                  </Nav>
                :
                  <Nav className="mrx-auto" navbar>
                    <NavItem className="d-flex align-items-center">
                      <button className="button-pink" onClick={this.logout}>Logout</button>
                    </NavItem>
                  </Nav>
              }
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
    );
  }
}

export default NavBar;
