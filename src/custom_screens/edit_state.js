import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class EditStatePage extends React.Component {
  async getState() {
    let firestore = firebase.firestore();
    let id = this.props.location.state.id;
    let state = await firestore.collection("states").doc(id).get()
    this.setState({
      state: state.data()["state"],

    })

  }
  componentDidMount() {
    this.getState()
  }

  constructor(props) {
    super(props);
    this.state = {
      state: ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getState = this.getState.bind(this)



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

      await firestore.collection("states").doc(this.props.location.state.id).update({ state: this.state.state });
      alert("updated")
      this.props.history.push({
        pathname: "/view_state",

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
                    STATE
                  </Form.Label>
                  <Form.Control type="text" name="state" value={this.state.state} onChange={this.handleChange} className="form-control" />
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
