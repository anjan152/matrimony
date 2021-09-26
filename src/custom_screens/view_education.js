import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
       import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';

export class ViewEducationPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getEducation=this.getEducation.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getEducation()
      {
        let firestore = firebase.firestore();
        let education = await firestore.collection("educations").get()
        let rows=[];
        education.forEach((education)=>{
            rows.push(<tr>
              
                <td>
                  {
                    education.data()["education"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update(education.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(education.id)}}>delete</Button>
                   </td>
            </tr>)
                
        });
      
      this.setState({rows:rows})
      }
      render()
      {
        return(
            <>
         <h2>
            VIEW EDUCATIONS
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>EDUCATION NAME</th>
            
            
    
            <th>ACTION1</th>
            <th>ACTION2</th>
          </tr>
        </thead>
        <tbody>
            {
              this.state.rows
            }
        </tbody>
        </Table>
        </>
        );
    }
       componentDidMount()
       {
         this.getEducation()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_education",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection("educations").doc(id).delete();
          alert("Deleted");
          this.getEducation();
        }
      }
}