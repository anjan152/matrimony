import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class RegistrationPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      date_of_birth: '',
      address: '',
      house_name: '',
      place: '',
      post: '',
      pincode: '',
      district: '',
      state: '',
      loggedin: false
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
    let auth = firebase.auth();

    try {
      await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
      await firestore.collection("registration").add({ name: this.state.name, date_of_birth: this.state.date_of_birth, address: this.state.address, house_name: this.state.house_name, place: this.state.place, post: this.state.post, pincode: this.state.pincode, district: this.state.district, state: this.state.state });
      alert("registred")
      this.setstate({ loggedin: true })
    }
    catch (e) {
      alert(e.message);
    }
  }
  redirect() {
    return <Redirect to='/search' />;
  }
  render() {
    return (
      <>
      
        {this.state.loggedin ? this.redirect() : this.getContent()}
      </>
    );
  }
  getContent() {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-center align-items-center " >
            <Col lg={6}>

              <Form id="form" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    password
                  </Form.Label>
                  <Form.Control type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Name
                  </Form.Label>
                  <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Date of birth
                  </Form.Label>

                  <Form.Control type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange} className="form-control" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    House name
                  </Form.Label>
                  <Form.Control type="text" name="house_name" value={this.state.house_name} onChange={this.handleChange} className="form-control" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    place
                  </Form.Label>
                  <Form.Control type="text" name="place" value={this.state.place} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    post
                  </Form.Label>
                  <Form.Control type="text" name="post" value={this.state.post} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    pincode
                  </Form.Label>
                  <Form.Control type="text" name="pincode" value={this.state.pincode} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    District
                  </Form.Label>
                  <Form.Control type="text" name="district" value={this.state.district} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    state
                  </Form.Label>
                  <Form.Control type="text" name="state" value={this.state.state} onChange={this.handleChange} className="form-control" />
                </Form.Group>






                <Form.Group>


                  <Button type="submit" className="btn btn-primary"> REGISTER</Button>
                </Form.Group>

              </Form>
            </Col>
          </Row>
        </Container>
      </>

    );
  }
}