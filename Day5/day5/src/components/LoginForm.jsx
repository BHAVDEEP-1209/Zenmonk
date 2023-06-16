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
import { Link, useNavigate  } from 'react-router-dom';

const defaultTheme = createTheme();


const LoginForm = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = React.useState({
    email : "",
    password : ""
  })
  const [emptyFields,setEmpty] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    const user = "";

    try{
      const user = JSON.parse(localStorage.getItem(`${userData.email}`));
      if(userData.email=="" || userData.password==""){
        setEmpty(true);
      }else if(user.email==userData.email && user.password==userData.password){
        localStorage.setItem('loggedUser',JSON.stringify(userData.email));
        window.alert("sucessful login!");
        navigate("/profile")
      }else{
        setInvalid(true);
      }

    }catch(error){
      setInvalid(true);
    }
    
  }

  //  console.log(userData);

  const handleChange=(e)=>{
    setEmpty(false)
    setInvalid(false);
    console.log(userData)

    setUserData((prev)=>{
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }
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
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1979D2' }}>
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
            onChange={handleChange}
          />
         {
          emptyFields &&  <span className='emptyFields' style={{color: "red"}}>Fields are empty!</span>
         }
         {
          invalid &&  <span className='emptyFields' style={{color: "red"}}>Wrong email or Password!</span>
         }
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
              <a href="#" variant="body2">
                Forgot password?
              </a>
            </Grid>
            <Grid item>
              <Link to="/">
                Don't have a account ? Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      
    </Container>
  </ThemeProvider>
  )
}

export default LoginForm