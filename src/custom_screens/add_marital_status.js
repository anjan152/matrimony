import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class AddMaritalStatusPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     marital_status: '',
     
          
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
      
      await firestore.collection("marital_statuses").add({ marital_status:this.state.marital_status});
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
                   marital_status
                  </Form.Label>
                  <Form.Control type="text" name="marital_status" value={this.state.marital_status} onChange={this.handleChange} className="form-control" />
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