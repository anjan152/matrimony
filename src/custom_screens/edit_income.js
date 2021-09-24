import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class EditIncomePage extends React.Component {
    async getIncome() {
      let firestore = firebase.firestore();
      let id = this.props.location.state.id;
      let income = await firestore.collection("incomes").doc(id).get()
      this.setState({
        income: income.data()["income"],
  
      })
  
    }
    componentDidMount() {
      this.getIncome()
    }
  
    constructor(props) {
      super(props);
      this.state = {
        income: ''
  
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getIncome = this.getIncome.bind(this)
  
  
  
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
  
        await firestore.collection("incomes").doc(this.props.location.state.id).update({ income: this.state.income });
        alert("updated")
        this.props.history.push({
          pathname: "/view_income",
  
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
                      Income
                    </Form.Label>
                    <Form.Control type="text" name="income" value={this.state.income} onChange={this.handleChange} className="form-control" />
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
  