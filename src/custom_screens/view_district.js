import React from "react";
import { Form, Button, Container, Row, Col,Table } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import { Redirect } from 'react-router-dom';


export class ViewDistrictPage extends React.Component {

  constructor(props){
            super(props);
            this.state={
              rows:[]
            }
        this.getDistricts=this.getDistricts.bind(this);
        this.update=this.update.bind(this);
      };
    
     async getDistricts()
      {
        let firestore = firebase.firestore();
        let  districts= await firestore.collection("districts").get()
        let rows=[];
        districts.forEach((district)=>{
            rows.push(<tr>
              
                <td>
                  {
                    district.data()["district_name"]
                  }
        </td>
               
                 <td>
                   <Button onClick={(e)=>{this.update( district.id)}}>update</Button>
                   </td>
                   <td>
                     <Button onClick={(e)=>{this.deleteData( district.id)}}>delete</Button>
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
            VIEW DISTRICT
        </h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>DISTRICT NAME</th>
            
            
    
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
         this.getDistricts()
       }
       update(id)
       {
         this.props.history.push({
           pathname:"/edit_district",
           state:{
             id:id
           }
         })
       }
       async deleteData(id){
        if(window.confirm("Are you sure?")){
          let firestore=firebase.firestore();
          await firestore.collection(" districts").doc(id).delete();
          alert("Deleted");
          this.getDistricts();
        }
      }
}