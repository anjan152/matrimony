import React from "react";
import { Form, Button, Container, Row, Col,Table} from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';

export class ViewIncomePage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getIncomes=this.getIncomes.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getIncomes()
      {
        let firestore = firebase.firestore();
        let incomes = await firestore.collection("incomes").get()
        let rows=[];
        incomes.forEach((income)=>{
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
         this.getIncomes()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_incomes",
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
          this.getIncomes();
        }
      }
}