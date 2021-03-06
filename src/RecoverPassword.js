import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <Row className="justify-content-center mt-5">
      <Col xl={3} lg={4} md={5} sm={7}>
        <Form className="border p-4">
          <h3 className="text-center mb-3">Forgot Password</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
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
            <Link to={"/signup"} className="nac-link">
              Sign Up
            </Link>
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default RecoverPassword;
