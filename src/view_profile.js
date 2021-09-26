import React from "react";
import { Form, Button, Container, Row, Col} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';



export class ViewProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
    this.getProfile = this.getProfile.bind(this);
    this.update = this.update.bind(this);
  };

  async getProfile() {
    let firestore = firebase.firestore();
    let profile = await firestore.collection("profiles").get()
    let rows = [];
    profile.forEach((profile) => {
      rows.push(<tr>

        <td>
          {
            profile.data()["profile"]
          }
        </td>

        <td>
          <Button onClick={(e) => { this.update(profile.id) }}>update</Button>
        </td>
        <td>
          <Button onClick={(e) => { this.deleteData(profile.id) }}>delete</Button>
        </td>
      </tr>)

    });

    this.setState({ rows: rows })
  }
  render() {
    return (
      <>
        <h2>
          VIEW RELIGION
        </h2>
        <Container>
          <Row className="d-flex justify-content-center align-items-center " >
            <Col lg={6}>
            </Col>
          </Row>
        </Container>
            
        
         
      </>
    );
  }
  componentDidMount() {
    this.getReligion()
  }
  update(id) {
    this.props.history.push({
      pathname: "/registration",
      state: {
        id: id
      }
    })
  }
  async deleteData(id) {
    if (window.confirm("Are you sure?")) {
      let firestore = firebase.firestore();
      await firestore.collection("profiles").doc(id).delete();
      alert("Deleted");
      this.getProfile();
    }
  }
}
