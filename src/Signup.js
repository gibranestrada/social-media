import React, { Component } from "react";
import { Form, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Row className="justify-content-center mt-5">
      <Col xl={3} lg={4} md={5} sm={7}>
        <Form className="border p-4">
          <h3 className="text-center mb-3">Sign Up</h3>
          <Form.Group controlId="formSignup">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Col className="text-center mb-2">
            <Button
              onClick={e => e.preventDefault()}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Col>
          <Col className="text-center">
            <Link to={"/"} className="nac-link">
              Log In
            </Link>
          </Col>
          <Col className="text-center">
            <Link to={"/recoverpassword"} className="nac-link">
              Forgot Password?
            </Link>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
