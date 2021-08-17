import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class ViewReligionPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getReligions=this.getReligions.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getReligions()
      {
        let firestore = firebase.firestore();
        let religions = await firestore.collection("religions").get()
        let rows=[];
        religions.forEach((religion)=>{
            rows.push(<tr>
              
                <td>
                  {
                    religion.data()["religion"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update(religion.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(religion.id)}}>delete</Button>
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
            VIEW RELIGION
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>RELIGION</th>
            
            
    
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
         this.getReligions()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_religions",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection("religions").doc(id).delete();
          alert("Deleted");
          this.getReligions();
        }
      }
}