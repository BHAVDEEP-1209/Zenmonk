import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import {GoogleButton} from "react-google-button"
import { useDispatch } from 'react-redux';
import {setValue} from "../slices/userSlice"


const defaultTheme = createTheme();

const SignIn = () => {
    const { googleSignIn , user} = UserAuth();
    const navigate = useNavigate();
    const {logIn} = UserAuth();
    const dispatch = useDispatch();

    const [formValues,setFormValues] = React.useState({email : "" , password : ""});
    const [onLoad,setOnLoad] = React.useState(false);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormValues((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const result = await logIn(formValues.email,formValues.password);
            if(result.user){
                navigate("/homepage")
            }
        }catch(error){
            window.alert("error")
            console.log(error);
        }

    }


    const handleGoogleSignIn=async()=>{
        try{
           await googleSignIn();
        }catch(error){
            console.log(error);
        }
    }


    React.useEffect(()=>{
        if(user!=null && onLoad==true){
            dispatch(setValue(user.email));
            console.log("user getting value!");
        }
    },[user])

  return (
    <div>
       <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formValues.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
                
              </Grid>
            </Grid>
          </Box>

          <hr />
          <GoogleButton onClick={handleGoogleSignIn}/>
        </Box>
      </Container>
    </ThemeProvider>

    </div>
  )
}

export default SignIn