import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react";
import Employee from "./Employee";
import { useNavigate } from "react-router-dom";


function Edit() {

    const [id,setId]=useState('');
    const [empname,setEmpname]=useState('');
    const [age,setAge]=useState(0);
    const [designation,setDesignation]=useState('');
    const [salary,setSalary]=useState(0);

    useEffect(()=>{
        setId(localStorage.getItem("ID"));
        setEmpname(localStorage.getItem("NAME"));
        setAge(localStorage.getItem("AGE"));
        setDesignation(localStorage.getItem("DESIGNATION"));
        setSalary(JSON.parse(localStorage.getItem("SALARY")));
    },[])

    console.log(id);
    console.log(empname)

    //index values of arrays  of employee
    var index=Employee.map(item=>item.id).indexOf(id);
    console.log(index);

    let history=useNavigate()


    const handleUpdate=(e)=>{
      e.preventDefault()
      console.log(e);
      let emp=Employee[index];
      console.log(emp);

      emp.empname=empname;
      emp.age=age;
      emp.designation=designation;
      emp.salary=salary;
      console.log(emp);

      history('/');

    }





  return (
    <>
      <p className="p-4">
        An employee management system is technology designed to streamline core
        HR services and improve workforce productivity. It accomplishes these
        goals largely by automating labor-intensive, administrative tasks and
        using analytics to drive business decisions.
      </p>
      <Row className="mx-0">
      <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">          
      <img className="p"
            src="https://wallpapers.com/images/hd/employee-i-d-badge-icon-dcdrfjgr6b7gk2m7-dcdrfjgr6b7gk2m7.jpg"
            alt=""
            style={{ width: "100%", maxWidth: "400px", borderRadius: "50%" }}
          />
        </Col>
        <Col xs={12} md={6} className="px-0 mr-3" >
          <Form className="border border-4 p-5">
            <Form.Group className=" mb-3">
                <h3 className="text-center">Update Your Profile</h3>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter the Name" value={empname} onChange={(e)=>setEmpname(e.target.value)} required/>
            </Form.Group>

            <Form.Group className=" mb-3">
            <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age"  value={age} onChange={(e)=>setAge(e.target.value)} required/>
            </Form.Group>
            <Form.Group className=" mb-3">
            <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter Designation"value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
            </Form.Group>
            <Form.Group className=" mb-3">
            <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter the salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required/>
            </Form.Group>


           
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Edit;
