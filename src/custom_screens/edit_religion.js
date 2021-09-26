import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
       import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';


export class EditReligionPage extends React.Component {
    async getReligion() {
      let firestore = firebase.firestore();
      let id = this.props.location.state.id;
      let religion = await firestore.collection("religions").doc(id).get()
      this.setState({
        religion: religion.data()["religion"],
  
      })
  
    }
    componentDidMount() {
      this.getReligion()
    }
  
    constructor(props) {
      super(props);
      this.state = {
        religion: ''
  
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getReligion = this.getReligion.bind(this)
  
  
  
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
  
        await firestore.collection("religions").doc(this.props.location.state.id).update({ religion: this.state.religion });
        alert("updated")
        this.props.history.push({
          pathname: "/view_religion",
  
        })
  
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
                    <Col lg={6}>  <CustomNavbar />

  
                <Form id="form" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>
                      Religion
                    </Form.Label>
                    <Form.Control type="text" name="religion" value={this.state.religion} onChange={this.handleChange} className="form-control" />
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
  