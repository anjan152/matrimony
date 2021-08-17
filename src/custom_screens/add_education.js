import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class AddEducationPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     Education: ''
          
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)




  }
  handleChange(event) {
    let data = {};
    data[event.target.name] = event.target.value;
    this.setState(data);
  }
  async handleSubmit(event) {
    let firestore = firebase.firestore();

    event.preventDefault();
   

    try {
      
      await firestore.collection("educations").add({ education:this.state.education});
      alert("added")
     
    }
    catch (e) {
      alert(e.message);
    }
  }
 
 
  
  render() {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-center align-items-center " >
            <Col lg={6}>

              <Form id="form" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>
                   EDUCATION
                  </Form.Label>
                  <Form.Control type="text" name="education" value={this.state.education} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                
                <Form.Group>


                  <Button type="submit" className="btn btn-primary"> ADD</Button>
                </Form.Group>

              </Form>
            </Col>
          </Row>
        </Container>
      </>

    );
  }
}