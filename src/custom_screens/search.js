import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
                    Address
                  </Form.Label>
                  <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" />

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
                  <Form.Label>
                    Education
                  </Form.Label>
                  <Form.Control type="text" name="education" value={this.state.education} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Religion
                  </Form.Label>
                  <Form.Control type="text" name="religion" value={this.state.religion} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Height
                  </Form.Label>
                  <Form.Control type="text" name="height" value={this.state.height} onChange={this.handleChange} className="form-control" />
                </Form.Group><Form.Group>
                  <Form.Label>
                    Physical status
                  </Form.Label>
                  <Form.Control type="text" name="physical_status" value={this.state.physical_status} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Employed In
                  </Form.Label>
                  <Form.Control type="text" name="employed_in" value={this.state.employed_in} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Occupation
                  </Form.Label>
                  <Form.Control type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Family Status
                  </Form.Label>
                  <Form.Control type="text" name="family_status" value={this.state.family_status} onChange={this.handleChange} className="form-control" />
                </Form.Group>










                <Form.Group>


                  <Button type="submit" className="btn btn-primary"> SEARCH</Button>
                </Form.Group>

              </Form>
            </Col>
          </Row>
        </Container>
      </>

    );
  }
}