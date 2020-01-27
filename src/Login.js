import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Row className="justify-content-center mt-5">
        <Col lg={4} md={5} sm={7}>
          <Form className="border p-4">
            <h2 className="text-center">Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Col className="text-center">
              <Button
                onClick={e => e.preventDefault()}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Login;
