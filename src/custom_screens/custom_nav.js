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
              <a href="/login" class="nav-link">Login</a>
              </li>
              <li class="nav-item">
              <a href="/registration" class="nav-link">Registration</a>
              </li>
              <li class="nav-item">
              <a href="/search" class="nav-link">Search</a>
              </li>
              
              
              
              
            </ul>

          </div>
        </div>
      </nav>



    );
  }

}