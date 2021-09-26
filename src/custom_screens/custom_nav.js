import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Link, Redirect } from 'react-router-dom';

export class CustomNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      is_set: false,
      admin: false,
      isLoggedIn: true
    };


    this.isAdmin = this.isAdmin.bind(this)

  }
  async isAdmin() {
    let auth = firebase.auth();
    let user = auth.currentUser;
    let claims = (await user.getIdTokenResult()).claims;

    this.setState({ is_set: true, admin: claims.admin })
  }

  componentDidMount() {
    let auth = firebase.auth()

    auth.onAuthStateChanged(async (user) => {

      if (user) {
        this.isAdmin()

      }
      else {
        this.setState({
          isLoggedIn: false
        })
      }

    })
  }
  render() {
    let adminNav = <>

      <li class="nav-item">
        <a href="/add_education" class="nav-link">AddEducation</a>
      </li>
      <li class="nav-item">
        <a href="/view_education" class="nav-link">ViewEducation</a>
      </li>

      <li class="nav-item">
        <a href="/add_job" class="nav-link">AddJob</a>
      </li>
      <li class="nav-item">
        <a href="/view_job" class="nav-link">ViewJob</a>
      </li>

      <li class="nav-item">
        <a href="/add_income" class="nav-link">AddIncome</a>
      </li>
      <li class="nav-item">
        <a href="/view_income" class="nav-link">ViewIncome</a>
      </li>

      <li class="nav-item">
        <a href="/add_state" class="nav-link">AddState</a>
      </li>
      <li class="nav-item">
        <a href="/view_state" class="nav-link">ViewState</a>
      </li>

      <li class="nav-item">
        <a href="/add_district" class="nav-link">AddDistrict</a>
      </li>
      <li class="nav-item">
        <a href="/view_district" class="nav-link">ViewDistrict</a>
      </li>

      <li class="nav-item">
        <a href="/add_religion" class="nav-link">AddReligion</a>
      </li>
      <li class="nav-item">
        <a href="/view_religion" class="nav-link">ViewReligion</a>
      </li>


      <li class="nav-item">
        <a href="/add_marital_status" class="nav-link">AddMaritalStatus</a>
      </li>
      <li class="nav-item">
        <a href="/view_marital_status" class="nav-link">ViewMaritalStatus</a>
      </li>

    </>
    let userNav = <>

      <li class="nav-item">
        <a href="/search" class="nav-link">Search</a>
      </li>

    </>

    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Matrimony</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              {this.state.is_set ? (this.state.admin ? adminNav : userNav) : ""}
              {
                this.state.isLoggedIn ? "" : <Redirect to="/" />
              }
              <li class="nav-item">
                <a href="#" onClick={() => firebase.auth().signOut()} class="nav-link">LOGOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }

}