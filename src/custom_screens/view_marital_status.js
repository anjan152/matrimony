import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
       import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';


export class ViewMaritalStatusPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getMaritalStatus=this.getMaritalStatus.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getMaritalStatus()
      {
        let firestore = firebase.firestore();
        let marital_statuses = await firestore.collection("marital_statuses").get()
        let rows=[];
        marital_statuses.forEach((marital_status)=>{
            rows.push(<tr>
               <td>
                  {
                   marital_status.data()["marital_status"]
                  }
               </td>
               <td>
                   <Button onClick={(e)=>{this.update(marital_status.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(marital_status.id)}}>delete</Button>
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
            VIEW MARITAL STATUS
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>MARITAL STATUS</th>
            
            
    
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
         this.getMaritalStatus()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_marital_status",
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
          this.getMaritalStatus();
        }
      }
}