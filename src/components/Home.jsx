import React from 'react';
import Table from 'react-bootstrap/Table';
import Employee from './Employee';
import {  FaTrashAlt ,FaEdit,FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';



function Home() {

  const history=useNavigate();

const handleDelete=(id)=>{
  alert(`Are u sure you want to delete`)
  console.log(Employee.map((item)=>item.id).indexOf(id)); //index of array value
  let index=Employee.map((item)=>item.id).indexOf(id);
  console.log(index);
  Employee.splice(index,1); //remove last from the array
  console.log(Employee);
  history('/');
}

const handleEdit=(id,empname,age,designation,salary)=>{
  localStorage.setItem("ID",id);
  localStorage.setItem("NAME",empname);
  localStorage.setItem("AGE",age);
  localStorage.setItem("DESIGNATION",designation);
  localStorage.setItem("SALARY",JSON.stringify(salary));


}



  return (
    <div>
        
        <p className='p-4'>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.</p>
        <Link to={'/add'}>
        <button className='btn btn-primary' style={{marginBottom:'10px'}}>Add <FaUserPlus /></button> 
        </Link>

         <Table className="table-striped table-bordered table-hover" style={{border:"2px solid"}}>
      <thead>
      <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Agee</th>
          <th> Designation</th>
          <th>Salary</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
      {
        Employee && Employee.length>0 ?
        Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                <Link to={'/edit'}><Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)} className='btn btn-info'><FaEdit /></Button></Link>
                <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaTrashAlt /></Button>
                </td>

            </tr>
        ))
        : "No Data Available"
       }
       
      </tbody>
    </Table>
      
    </div>
  )
}

export default Home
