import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';


export class HomePage extends React.Component {
    render() {
      return (<>
  
  
      
  
  
  
  
  
        <header>
           <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
              <a href="/login" class="navbar-brand d-flex align-items-center">
                <strong>Indian Matrimony</strong>
              </a>
            
            </div>
          </div>
        </header>
  
        <main role="main">
  
          <section class="jumbotron text-center">
            <div class="container">
              <h1 class="jumbotron-heading">Welcome!</h1>
  
  
              <p>“Husband and wife relationships are like the relationship of Tom and Jerry. Though they are teasing and fighting, but can’t live without each other.” </p>
              
              <p>
                <a href="/home" class="btn btn-primary my-2">Login</a>
                
              </p>
            </div>
          </section>
  
          <div class="album py-5 bg-light">
            <div class="container">
  
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" style={{ height: '225px', width: '100%', display: 'block' }} src={process.env.PUBLIC_URL + '/1.jpg'} />
                    <div class="card-body">
                      <p class="card-text">“In terms of my marriage, you know, falling in love with my husband was by far the best thing that’s ever happened to me.”</p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/2.jpg'} style={{ height: '225px', width: '100%', display: 'block' }} />
                    <div class="card-body">
                      <p class="card-text">“My husband has made me laugh. Wiped my tears. Hugged me tight. Watched me succeed. Seen me fail. Kept me strong. My husband is a promise that I will have a friend forever.”</p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/3.jpg'} style={{ height: '225px', width: '100%', display: 'block' }} />
                    <div class="card-body">
                      <p class="card-text">“A husband and wife may disagree on many things but they must absolutely agree on this: to never, ever give up.” </p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/4.jpg'} style={{ height: '225px', width: '100%', display: 'block' }} />
                    <div class="card-body">
                      <p class="card-text">“There is no such cozy combination as man and wife.”</p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/5.jpg'} style={{ height: '225px', width: '100%', display: 'block' }} />
                    <div class="card-body">
                      <p class="card-text">“A successful marriage requires falling in love many times, always with the same person.”</p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/6.jpg'} style={{ height: '225px', width: '100%', display: 'block' }} />
                    <div class="card-body">
                      <p class="card-text">“The great marriages are partnerships. It can’t be a great marriage without being a partnership.”</p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      </div>
                    </div>
                  </div>
                </div>
             
  
  
              </div>
            </div>
          </div>
  
        </main>
  
  
  
      </>)
  
    }
  }
  