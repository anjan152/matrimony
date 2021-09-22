import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';


export class EditEducationPage extends React.Component {
  async getEducation() {
    let firestore = firebase.firestore();
    let id = this.props.location.state.id;
    let education = await firestore.collection("educations").doc(id).get()
    this.setState({
      education_name: education.data()["education_name"],

    })

  }
  componentDidMount() {
    this.getEducation()
  }

  constructor(props) {
    super(props);
    this.state = {
      education_name: ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getEducation = this.getEducation.bind(this)



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

      await firestore.collection("educations").doc(this.props.location.state.id).update({ education_name: this.state.education_name });
      alert("updated")
      this.props.history.push({
        pathname: "/view_new_education"

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
                    Education
                  </Form.Label>
                  <Form.Control type="text" name="education_name" value={this.state.education_name} onChange={this.handleChange} className="form-control" />
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
