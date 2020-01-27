import React, { Component } from "react";
//import logo from './logo.svg';
import "bootswatch/dist/materia/bootstrap.min.css";
import "./App.css";
import { Dropdown } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <ButtonToolbar>
          {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
            variant => (
              <DropdownButton
                title={variant}
                variant={variant.toLowerCase()}
                id={`dropdown-variants-${variant}`}
                key={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            )
          )}
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
