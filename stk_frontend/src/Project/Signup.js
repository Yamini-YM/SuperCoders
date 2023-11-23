import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from "axios"
import './Signup.css'
import { setUser } from './action'
import {useDispatch} from 'react-redux'
//import './Signup.css'

export default function Signup() {
  const dispatch=useDispatch();
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [contact, setContact] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate=useNavigate();
  //const NavigateHeader;

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match')
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long')
    } else {
      setPasswordError('password correct')
    }
  }

  
  const handleSignUp = (e) => {
    e.preventDefault()
    validatePassword();
    dispatch(setUser(name));
    // Perform signup logic here if all fields are valid
    if (passwordError==='password correct') {
      // Perform signup logic
      // console.log("hii");
      navigate('/Home');
     
     
    }else{
      console.log("error")
    }
    axios.post("http://localhost:8080/sign",{
      name:name,
      mail:mail,
      password:password,
      confirmPassword:confirmPassword,
      contact:contact,

    }
      )
    .then((response)=>{
      console.log(response);
      navigate('/Home');
      
    })
    .catch((error)=>{
      console.error(error);
    });

  }

  return (
    <div className='registration-form-container'>
      <form>
        <center>
          <h1>SignUp</h1>
          <br></br>
          <label>Name</label>
         
          <TextField id="name" label="name" type="text" required value={name}
            onChange={(e) => setName(e.target.value)}/>
          <br></br>
          <br></br>
          <label>Email</label>
          
          <TextField id="email" label="email"  type="email" required value={mail}
            onChange={(e) => setMail(e.target.value)}/>
          <br />
          <br />
          <label>Password</label>
          
          <TextField
            id="email"
            label="password"
            
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Confirm Password</label>
          
          <TextField
            id="confirm"
            label="confirm"
            
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br></br>
          <br></br>
         
          <label>Contact No</label>
         
          <TextField id="contact" label="contact" type="text" required value={contact}
            onChange={(e) => setContact(e.target.value)}/>
          <br />
          <br />
          {passwordError && <p className="error">{passwordError}</p>}
        </center>
        <br/>
        <Box textAlign="center">
        <Button variant="contained" color="primary" input type='submit' onClick={handleSignUp} >SIGNUP</Button>
        </Box>
        
        <p>
          <center>
            Have an Account? <Link to="/Login">Login</Link>
          </center>
        </p>
      </form>
    </div>
    
  )
}
