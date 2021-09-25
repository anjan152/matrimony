import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class RegistrationPage extends React.Component {
  componentDidMount() {
    this.setSelectBoxes()
  }
  async setSelectBoxes() {

    await this.getData("jobs", "job", "job")
    await this.getData("incomes", "income", "income")
    await this.getData("religions", "religion", "religion")
    await this.getData("educations", "education", "education")
    await this.getData("district", "district", "district")
    await this.getData("states", "state", "state")
  }
  async getData(collection, field_name, select) {
    let firestore = firebase.firestore();
    let data = await firestore.collection(collection).get()
    let options = [];
    data.forEach((element) => {
      options.push(
        <option value={element.id}>{element.data()[field_name]}</option>

      )


    })
    let select_options = {}
    select_options[select] = options
    this.setState(select_options)
  }

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
      education: '',
      job: '',
      income: '',
      religion: '',
      religon_id: '',
      education_id: '',
      district_id: '',
      state_id: '',
      job_id: '',
      income_id: '',
      state: '',
      religion: [],
      education: [],
      district: [],
      state: [],
      job: [],
      income: [],
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
                    EMAIL
                  </Form.Label>
                  <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    PASSWORD
                  </Form.Label>
                  <Form.Control type="text" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    NAME
                  </Form.Label>
                  <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    DATE OF BIRTH
                  </Form.Label>

                  <Form.Control type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Label>
                  ADDRESS
                </Form.Label>

                <Form.Group>
                  <Form.Label>
                    HOUSE NAME
                  </Form.Label>
                  <Form.Control type="text" name="house_name" value={this.state.house_name} onChange={this.handleChange} className="form-control" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    PLACE
                  </Form.Label>
                  <Form.Control type="text" name="place" value={this.state.place} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    PHONE NUMBER
                  </Form.Label>
                  <Form.Control type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} className="form-control" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    PINCODE
                  </Form.Label>
                  <Form.Control type="text" name="pincode" value={this.state.pincode} onChange={this.handleChange} className="form-control" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    RELIGION
                  </Form.Label>
                  <Form.Control as="select" name="religion_id" value={this.state.religion_id} onChange={this.handleChange}  >
                    <option value=''> </option>
                    {this.state.religion}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    EDUCATION
                  </Form.Label>
                  <Form.Control as="select" name="education_id" value={this.state.education_id} onChange={this.handleChange}  >
                    <option value=''></option>
                    {this.state.education}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    DISTRICT
                  </Form.Label>
                  <Form.Control as="select" name="district_id" value={this.state.district_id} onChange={this.handleChange}  >
                    <option value=''></option>
                    {this.state.district}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    STATE
                  </Form.Label>
                  <Form.Control as="select" name="state_id" value={this.state.state_id} onChange={this.handleChange} >
                    <option value=''></option>
                    {this.state.state}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    JOB
                  </Form.Label>
                  <Form.Control as="select" name="job_id" value={this.state.job_id} onChange={this.handleChange}  >

                    <option value=''></option>
                    {this.state.job}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>

                    INCOME
                  </Form.Label>
                  <Form.Control as="select" name="income_id" value={this.state.income_id} onChange={this.handleChange}  >
                    <option value=''></option>
                    {this.state.income}
                  </Form.Control>
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