import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class ViewEducationPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getEducations=this.getEducations.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getEducations()
      {
        let firestore = firebase.firestore();
        let educations = await firestore.collection("educations").get()
        let rows=[];
        educations.forEach((education)=>{
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
            <th>EDUCATION</th>
            
            
    
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
         this.getEducations()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_educations",
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
          this.getEducations();
        }
      }
}