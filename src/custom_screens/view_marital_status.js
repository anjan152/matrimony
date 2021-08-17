import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class ViewMaritalStatusPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getMaritalStatuses=this.getMaritalStatuses.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getMaritalStatuses()
      {
        let firestore = firebase.firestore();
        let maritalStatuses = await firestore.collection("marital_statuses").get()
        let rows=[];
       maritalStatuses.forEach((maritalStatus)=>{
            rows.push(<tr>
              
                <td>
                  {
                    maritalStatus.data()["marital_status"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update(maritalStatus.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(maritalStatus.id)}}>delete</Button>
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
            VIEW MaritalStatus
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>MaritalStatus</th>
            
            
    
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
         this.getMaritalStatuses()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_marital_statuses",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection("marital_statuses").doc(id).delete();
          alert("Deleted");
          this.getMaritalStatuses();
        }
      }
}