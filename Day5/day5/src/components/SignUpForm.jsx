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
import { Link , useNavigate} from 'react-router-dom';
import Role from "../components/Role"

const defaultTheme = createTheme();

const SignUpForm = () => {
  const navigate = useNavigate();

    // custom validation
    const [emptyFields,setEmpty] = React.useState(false);
    const [invalid,setInvalid] = React.useState({status: false, msg: "no error"});
    const [strongPassword,setStrongPassword] = React.useState(false);

    const [userData,setUserData] = React.useState({
      fName: "",
      lName : "",
      email : "",
      password : "",
      role : "admin"
    })

    React.useEffect(()=>{
      if(userData.password!=""){
        checkPassword(userData.password)
      }
    },[userData.password])


    const checkPassword=(password)=>{
      let lowerCase = /[a-z]/g;
      let upperCase = /[A-Z]/g;
      let numbers = /[0-9]/g;
      setStrongPassword(false);

      if (!password.match(lowerCase)) {
        setInvalid({status:true, msg:"Password should contains lowercase letters!"})
     } else if (!password.match(upperCase)) {
       
        setInvalid({status:true, msg:"Password should contains uppercase letters!"})
     } else if (!password.match(numbers)) {
       
        setInvalid({status:true, msg:"Password should contains numbers!"})
     } else if (password.length < 10) {
        
        setInvalid({status:true, msg:"Password length should be more than 10."})
     } else {
       
        setStrongPassword(true); 
     }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(userData.fName=="" || userData.lName=="" ||userData.email=="" || userData.password==""){
          setEmpty(true);
        }else if(!/\S+@\S+\.\S+/.test(userData.email)){
          setInvalid({status: "true", msg: "Invalid email address!..."})
        }else if(userData.password!=""){
          checkPassword(userData.password);
          localStorage.setItem(`${userData.email}`,JSON.stringify(userData));
          alert("User registered successfully!")
          navigate("/login")
        }
      };

      const handleChange=(e)=>{
        setEmpty(false);
        setInvalid({status:false})
        setUserData((prev)=>{
          return {
            ...prev,
            [e.target.name] : e.target.value
          }
        })
      }

      // const handlePasswordChange=(e)=>{
      //   setEmpty(false);
      //   setInvalid({status:false})
      //   setUserData((prev)=>{
      //     return {
      //       ...prev,
      //     [e.target.name] : e.target.value
      //     }
      //   })

      //   if(userData.password.length>0){
      //     checkPassword(userData.password);
      //   }
      // }


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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userData.fName}
                  onChange={handleChange}
                  error={emptyFields}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lName"
                  autoComplete="family-name"
                  value={userData.lName}
                  onChange={handleChange}
                  error={emptyFields}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={handleChange}
                  error={emptyFields}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={handleChange}
                  error={emptyFields}
                />
                 {
          emptyFields &&  <span className='emptyFields' style={{color: "red"}}>Fields are empty!...</span>
         }
         {
          invalid.status &&  <span className='emptyFields' style={{color: "red"}}>{invalid.msg}</span>
         }
         {
         strongPassword &&  <span className='emptyFields' style={{color: "green"}}>strong password</span>
         }
              </Grid>
              <Grid item xs={12}>
                <Role />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive future updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
  );
}

export default SignUpForm