import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class EditDistrictPage extends React.Component {
  async getDistrict() {
    let firestore = firebase.firestore();
    let id = this.props.location.state.id;
    let district = await firestore.collection("districts").doc(id).get()
    this.setState({
      district_name: district.data()["district_name"],

    })

  }
  componentDidMount() {
    this.getDistrict()
  }

  constructor(props) {
    super(props);
    this.state = {
      district_name: ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getDistrict = this.getDistrict.bind(this)



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

      await firestore.collection("districts").doc(this.props.location.state.id).update({ district_name: this.state.district_name });
      alert("updated")
      this.props.history.push({
        pathname: "/view_new_district"

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
                    District
                  </Form.Label>
                  <Form.Control type="text" name="district_name" value={this.state.district_name} onChange={this.handleChange} className="form-control" />
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
