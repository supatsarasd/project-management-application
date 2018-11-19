import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Admin.css";
import { Auth } from "aws-amplify";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    try {
      if(this.state.email == "ss9g18@soton.ac.uk"){
          await Auth.signIn(this.state.email, this.state.password);
          this.props.userHasAuthenticated(true);
          this.props.history.push("/signup");
      }else{alert("You do not right to access this site")}  
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
     
      <div className="Admin">
        <div> 
           <h2> Admin site</h2>
        </div>  
        <br/>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <br/>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
     
        </form>
      </div>
    );
  }
}