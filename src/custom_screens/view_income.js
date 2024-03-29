import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
       import { CustomNavbar } from "./custom_nav"

import { Redirect } from 'react-router-dom';


export class ViewIncomePage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getIncome=this.getIncome.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getIncome()
      {
        let firestore = firebase.firestore();
        let income = await firestore.collection("incomes").get()
        let rows=[];
        income.forEach((income)=>{
            rows.push(<tr>
              
                <td>
                  {
                    income.data()["income"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update(income.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData(income.id)}}>delete</Button>
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
            VIEW INCOMES
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>INCOME</th>
            
            
    
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
         this.getIncome()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_income",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection("incomes").doc(id).delete();
          alert("Deleted");
          this.getIncome();
        }
      }
}