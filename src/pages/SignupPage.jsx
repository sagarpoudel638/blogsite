import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUser } from "../utils/axiosHelper";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [ userData, setUserdata ] = useState({
    username:"",
    email:"",
    password:"",
  });
  const navigate = useNavigate(); 

  const handleOnchange = (e) => {
    const tempData = { ...userData };
    tempData[e.target.name] = e.target.value;
    setUserdata(tempData);
  };

  // const handleOnchange = (e) => {
  //   const {name,value}=e.target;
  //   // console.log(name,value)
  //   setUserdata({...userData,[name]:value})
  // };

  const handleOnSubmit =async(e)=>{
    e.preventDefault();
    const response = await createUser(userData);
    console.log(response)
    if (response.status == "success") {
      console.log("success");
        navigate("/login");
    } else {
      console.log("error");
    }

  }
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row>
          <Col>
            <Form className="border p-4 rounded shadow" onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3 d-flex align-items-center justify-content-center">
                <Link to="/">
                  <Image
                    style={{ width: "50px", height: "auto" }}
                    src="/logo.png"
                    fluid
                  />
                </Link>
              </Form.Group>
              <hr />
              <Form.Group className="mb-3"  controlId="formBasicName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User name"
                  name="username"
                  value={userData.username}
                  onChange={handleOnchange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={userData.email}
                  onChange={handleOnchange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={handleOnchange}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Signup
              </Button>
              <Link to="/login">
                <Button className="ms-2" variant="primary" type="submit">
                  Login
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}; 
export default SignupPage;
