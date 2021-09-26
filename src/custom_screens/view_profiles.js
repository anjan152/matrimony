import React from "react";
import { Form, Button, Container, Row, Col, Education } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { CustomNavbar } from "./custom_nav"

export class ViewProfilePage extends React.Component {

    componentDidMount() {
        if(this.props.location.state){
            this.getData()
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        };
        this.getData = this.getData.bind(this)
    }

    async getData() {
        console.log("RUNNING")
        console.log(this.props.location.state)
        let firestore = firebase.firestore();
        let users = await firestore.collection("registration")
            .where("religion_id", "==", this.props.location.state.religion_id)
            .where("education_id", "==", this.props.location.state.education_id)
            .where("district_id", "==", this.props.location.state.district_id)
            .where("state_id", "==", this.props.location.state.state_id)
            .where("job_id", "==", this.props.location.state.job_id)
            .where("income_id", "==", this.props.location.state.income_id)
            .get()
        let profiles = [];
        users.forEach((user) => {
            profiles.push(

                <Col lg={6}>
                    <h4>{user.data()["name"]}</h4>
                    <p>DOB: {user.data()["date_of_birth"]}</p>
                    <p>Pin: {user.data()["pincode"]}</p>
                    <p>Place: {user.data()["place"]}</p>
                    <p>Phone: {user.data()["phone_number"]}</p>
                    <p>Email: {user.data()["email"]}</p>
                </Col>
            )
        });

        this.setState({ profiles: profiles })
    }



    render() {
        return (
            <>
                <Container>
                <CustomNavbar />

                    <Row className="d-flex justify-content-center align-items-center " >
                        <h3>Profiles</h3>

                    </Row>
                    <Row>

                    {this.state.profiles.length > 0 ? this.state.profiles : "No Profiles" }

                    </Row>
                </Container>
            </>

        );
    }
}