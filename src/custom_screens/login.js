
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
       import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';



export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedin: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getContent = this.getContent.bind(this);
  }
  getContent(){
    return (<>
      <Container className="my-5">
        <Row>
          <Col lg="6">
          <h3 className="mb-4">Login</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label> email</Form.Label>
                <Form.Control type="text" name="email" placeholder="enter name" value={this.state.email} onChange={this.handleChange} /></Form.Group>
              <Form.Group>
                <Form.Label> password</Form.Label>
                <Form.Control type="password" name="password" placeholder="enter password" value={this.state.password} onChange={this.handleChange} /></Form.Group>
              <Form.Group>
                <Button type="submit">Submit</Button>
              </Form.Group>
            </Form>

            <a href="/registration">Register Now!</a>
          </Col>
        </Row>
      </Container>

    </>)
  }
  

  render() {
    return (
      <>
        { this.getContent()}
      </>
    );
  }
  handleChange(event) {
    let data = {};
    data[event.target.name] = event.target.value;
    this.setState(data);
  }
  async handleSubmit(event) {
    console.log("clicked")
    event.preventDefault();
    let auth = firebase.auth();

    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      alert("Logged In")
      
    }
    catch (e) {
      alert(e.message);
    }
  }
 
}

export default LoginPage;