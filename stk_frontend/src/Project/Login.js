import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './Login.css'
export default function() {
  return (
    
    <div className='registration-form-container'>

        <form action='http://localhost:3000/Home'>
        <center>
        <h1>Login</h1><br></br>
        <label>Email</label><br></br>
        
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Password</label><br></br>
        
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="primary" input type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <p><center>Don't have an Account? <Link to="/Signup">Signup</Link></center></p>
        </form>

    </div>
  )
  }