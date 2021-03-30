import React, {useState} from 'react';
<<<<<<< HEAD
import {Form, Button, Alert} from 'react-bootstrap';
=======
import {Form, Button} from 'react-bootstrap';
>>>>>>> 9bd8b63a70fe0979a74888b03189400447f29643

function UserForm(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const handleSubmit = event => {
      event.preventDefault();
      var emailValid = false;
<<<<<<< HEAD
      var passwordValid = false;
=======
>>>>>>> 9bd8b63a70fe0979a74888b03189400447f29643
      if(email.length == 0){
        setEmailError("Email is required. ");
      }
      else if(email.length<6){
        setEmailError("Email should be minimum 6 characters ");
      }
      else if(email.indexOf(' ')>=0){
        setEmailError("Email cannot contain spaces");
      }
      else{
        setEmailError(" ");
        emailValid = true;
      }
<<<<<<< HEAD
      if(password.length == 0){
        setPasswordError("Password is required. ")
      }
      else if(password.length < 8){
        setPasswordError("Password should be minimum 8 characters");
      }
      else if(password.indexOf(' ')>=0){
        setPasswordError("Password cannot contain spaces");
      }
      else{
        setPasswordError(" ");
        passwordValid = true;
      }
      if(emailValid && passwordValid){
        alert('Email: ' + email +'\nPassword: ' + password);
        setEmail(" ");
        setPassword(" ");
=======
      if(emailValid){
        alert('Email: ' + email +'\nPassword: ' + password);
>>>>>>> 9bd8b63a70fe0979a74888b03189400447f29643
      }
    }

    return(
        <div>
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
<<<<<<< HEAD
          onChange = {event => setEmail(event.target.value)}
          value = {email}/>
=======
          onChange = {event => setEmail(event.target.value)}/>
>>>>>>> 9bd8b63a70fe0979a74888b03189400447f29643
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
<<<<<<< HEAD
        {emailError.length>0 &&
        <Alert variant="danger">{emailError}</Alert>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          onChange = {event => setPassword(event.target.value)}
          value = {password}/>
        </Form.Group>
        {passwordError.length>0 && 
        <Alert variant = "danger">{passwordError}</Alert>}
=======
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          onChange = {event => setPassword(event.target.value)}/>
        </Form.Group>
>>>>>>> 9bd8b63a70fe0979a74888b03189400447f29643
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
<<<<<<< HEAD
      {/* Email Entered : {email}
      <br/>
      Password Entered : {password} */}
=======
      Email Entered : {email}
      <br/>
      Password Entered : {password}
>>>>>>> 9bd8b63a70fe0979a74888b03189400447f29643
      </div>
    );
}

export default UserForm;
