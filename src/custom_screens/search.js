import React from "react";
import { Form, Button, Container, Row, Col, Education} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


export class SearchPage extends React.Component {
  search()
  {
    this.props.history.push({
      pathname:"/view_profiles",
      state:{
        religion_id:this.state.religon_id,
        education_id:this.state.education_id,
        district_id:this.state.district_id,
        state_id:this.state.state_id,
        job_id:this.state.job_id,
        income_id:this.state.income_id

      }
    })
  }
  componentDidMount()
  {
    this.setSelectBoxes()
  }
  async setSelectBoxes(){
    
    await this.getData("jobs","job","job")
    await this.getData("incomes","income","income")
    await this.getData("religions","religion","religion")
    await this.getData("educations","education","education")
    await this.getData("district","district","district")
    await this.getData("states","state","state")
  }
async getData(collection,field_name,select){
  let firestore = firebase.firestore();
        let data = await firestore.collection(collection).get()
        let options=[];
  data.forEach((element)=>{
    options.push(
      <option value={element.id}>{element.data()[field_name]}</option>

    )


  })
  let select_options={}
  select_options[select]=options
  this.setState(select_options)
}
  constructor(props) {
    super(props);
    this.state = {
      religon_id:'',
      education_id:'',
      district_id:'',
      state_id:'',
      job_id:'',
      income_id:'',
      state: '',
      religion: [],
      education: [],
      district: [],
      state: [],
      job:[],
      income: []
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
                <Form.Control as="select"name="religion_id" value={this.state.religion_id} onChange={this.handleChange}  >
                 <option value=''>religion </option>
                   {this.state.religion}
                </Form.Control>
               </Form.Group>
      <Form.Group>
       <Form.Control as="select"name="education_id" value={this.state.education_id} onChange={this.handleChange}  >
        <option value=''>education</option>
           {this.state.education}
         </Form.Control>
       </Form.Group>
            <Form.Group>
                <Form.Control as="select"  name="district_id" value={this.state.district_id} onChange={this.handleChange}  >
      <option value=''>district</option>
      {this.state.district}
      </Form.Control>
                </Form.Group>
      <Form.Group>
                <Form.Control as="select" name="state_id" value={this.state.state_id} onChange={this.handleChange} >
      <option value=''>state</option>
      {this.state.state}
      </Form.Control>
                </Form.Group>
      <Form.Group>
                <Form.Control as="select"name="job_id" value={this.state.job_id} onChange={this.handleChange}  >

      <option value=''>job</option>
      {this.state.job}
      </Form.Control>
                </Form.Group>
            <Form.Group>
                <Form.Control as="select"name="income_id" value={this.state.income_id} onChange={this.handleChange}  >
      <option value=''>income</option>
      {this.state.income}
      </Form.Control>
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