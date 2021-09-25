import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class EditMaritalStatusPage extends React.Component {
    async getMaritalStatus() {
      let firestore = firebase.firestore();
      let id = this.props.location.state.id;
      let marital_status = await firestore.collection("marital_statuses").doc(id).get()
      this.setState({
        marital_status: marital_status.data()["marital_status"],
  
      })
  
    }
    componentDidMount() {
      this.getMaritalStatus()
    }
  
    constructor(props) {
      super(props);
      this.marital_status = {
        marital_status: ''
  
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getMaritalStatus = this.getMaritalStatus.bind(this)
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
  
        await firestore.collection("marital_statuses").doc(this.props.location.marital_status.id).update({ marital_status: this.marital_status.marital_status });
        alert("updated")
        this.props.history.push({
          pathname: "/view_marital_status",
  
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
              <Col lg={6}>
  
                <Form id="form" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>
                      MARITAL STATUS
                    </Form.Label>
                    <Form.Control type="text" name="marital_status" value={this.marital_status.marital_status} onChange={this.handleChange} className="form-control" />
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
  