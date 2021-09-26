import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
       import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';


export class ViewJobPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getJobs=this.getJobs.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getJobs()
      {
        let firestore = firebase.firestore();
        let jobs = await firestore.collection("jobs").get()
        let rows=[];
        jobs.forEach((job)=>{
            rows.push(<tr>
              
                <td>
                  {
                    job.data()["job_name"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update(job.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(job.id)}}>delete</Button>
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
            VIEW JOBS
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>JOB NAME</th>
            
            
    
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
         this.getJobs()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_job",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection("jobs").doc(id).delete();
          alert("Deleted");
          this.getJobs();
        }
      }
}