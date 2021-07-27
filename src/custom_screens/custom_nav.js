import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Link } from 'react-router-dom';

export class CustomNavbar extends React.Component {


  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
              <Link to="/login" class="nav-link">Login</Link>
              </li>
              <li class="nav-item">
              <Link to="/registration" class="nav-link">Registration</Link>
              </li>
              <li class="nav-item">
              <Link to="/search" class="nav-link">Search</Link>
              </li>
              <li class="nav-item">
              <Link to="/education" class="nav-link">Education</Link>
              </li>
              
              
              
            </ul>

          </div>
        </div>
      </nav>



    );
  }

}