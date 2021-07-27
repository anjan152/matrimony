import React from "react";
import { Form, Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


export class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date_of_birth: '',
      address: '',
      house_name: '',
      place: '',
      post: '',
      pincode: '',
      district: '',
      state: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let data = {};
    data[event.target.name] = event.target.value;
    this.setState(data);
  }
  async handleSubmit(event) {
    event.preventDefault();
    let auth = firebase.auth();

    try {
      await auth.signInWithEmailAndPassword(event.target.email.value, event.target.password.value);
      alert("Logged In")
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
                  <Form.Select aria-label="Default select example">
                    <option>Education</option>
                    <option value="Bsc">Bsc</option>
                    <option value="Msc">Msc</option>
                    <option value="Mca">Mca</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group><Button type="submit" className="btn btn-primary"> SEARCH</Button>
                </Form.Group>

              </Form>
            </Col>
          </Row>
        </Container>
      </>

    );
  }
}