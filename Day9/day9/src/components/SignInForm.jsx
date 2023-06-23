import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import google from "../assets/google.svg";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [number,setNumber] = useState("");
    const [error,setError] = useState("");

// initializing form values in sing in from

// updating the values in the input filed or formValues on typing


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("button clicked!")
    if(!number){
      setError("Phone number required!");
    }else if(number.length!=10){
      setError("Invalid Phn no.!");
    }else{
      navigate(`/otp/${number}`);
    }
    
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >

            {/* header section  */}
            <div className="header">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Hello Again!
          </Typography>
        </div>
        <Typography component="p" variant="p" className='header_info'>
            Enter credentails to Login In!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Phone Number"
              name="number"
              autoComplete="email"
              autoFocus
              value={number}
              onChange={(e)=>{setNumber(e.target.value)
              setError("");
              }}
            />
            <p className='error'>{error}</p>
          
           
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor: '#916BBF'  }}
              onClick={handleSubmit}
            >
             Sign In
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}