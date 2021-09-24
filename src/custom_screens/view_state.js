import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class ViewStatePage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getStates=this.getStates.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getStates()
      {
        let firestore = firebase.firestore();
        let states = await firestore.collection("states").get()
        let rows=[];
        states.forEach((state)=>{
            rows.push(<tr>
              
                <td>
                  {
                    state.data()["state"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update(state.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(state.id)}}>delete</Button>
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
            VIEW STATES
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>STATE</th>
            
            
    
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
         this.getStates()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_state",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection("states").doc(id).delete();
          alert("Deleted");
          this.getStates();
        }
      }
}