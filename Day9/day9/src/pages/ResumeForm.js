import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {setResumeValue} from "../slices/resumeSlice"
import { Link , useNavigate, useParams} from 'react-router-dom';
import BasicModal from '../components/BasicModal';
import { useLocation } from 'react-router-dom';


const defaultTheme = createTheme();

export default function ResumeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const number = useSelector(state=>state.reducer.user.user.number);

  // intializing form values
  const initialValues = {fName : "", lName : "", email : "", password : "" ,skills : "" , img : "", graduation : "" , school : "" , job : "", employer : "" , job_desc : "", createdBy : number, address : "" }
  const [formValues,setFormValues] = React.useState(initialValues);

   // handle on change event on input values of form
   const handleChange=(event)=>{
    const {name,value} = event.target;
      setFormValues((prev)=>{
        return {
          ...prev,
          [name] : value
        }
      })
   }

 
   const handleFileChange=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      setFormValues((prev)=>{
          return {
            ...prev,
            'img' : reader.result
          }
      })
    }
}


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setResumeValue(formValues));
    window.alert("Resume Created!")
    navigate("/homepage");
  };

  // material ui form
  return (
    <>
    <h1 style={{textAlign:'center', marginBottom : 0}}>Create Resume</h1>
    <div className="resume_main_div">
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

          {/* header section  */}
          <Avatar sx={{ m: 1, bgcolor: '#916BBF' }}>
           
           </Avatar>
          <div className="header">
          
          <Typography component="h1" variant="h5">
            Personal Info
          </Typography>
          </div>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={formValues.fName}
                />
              </Grid>
             
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lName"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={formValues.lName}
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
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  onChange={handleChange}
                  value={formValues.address}
                />
              </Grid>
             
           


              {/* image uploading section */}
              <div className="img_upload_section" style={{position : "relative",left: 20 , marginBottom : 5}}>
              <label htmlFor="imgUpload">Upload Image!</label>
              <input type="file" name="" id="imgUpload" onChange={handleFileChange}/>
              </div>
  
            </Grid>

            <Typography component="h1" variant="h5">
            Work Info
          </Typography>


          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="job"
                  required
                  fullWidth
                  id="Job"
                  label="Job-Title"
                  autoFocus
                  onChange={handleChange}
                  value={formValues.job}
                />
              </Grid>
              
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="Employer"
                  label="Employer"
                  name="employer"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={formValues.employer}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="job-desc"
                  label="Job Description"
                  name="job_desc"
                  autoComplete="job_desc"
                  onChange={handleChange}
                  value={formValues.job_desc}
                />
              </Grid>
       
            </Grid>
            </Box>




            <Typography component="h1" variant="h5">
            Skiils & Education
          </Typography>


          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="school"
                  required
                  fullWidth
                  id="school"
                  label="school"
                  autoFocus
                  onChange={handleChange}
                  value={formValues.school}
                />
              </Grid>
           
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="Graduation"
                  label="Graduation"
                  name="graduation"
                  autoComplete=""
                  onChange={handleChange}
                  value={formValues.graduation}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Skills"
                  label="Skills Description"
                  name="skills"
                  autoComplete="skills"
                  onChange={handleChange}
                  value={formValues.skills}
                />
              </Grid>
         
            </Grid>
            </Box>






            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#916BBF' }}
            >
              create Resume
            </Button>

          

            

            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    <button onClick={()=>{setFormValues(initialValues)}}>Cancel resume</button>
    <BasicModal form={formValues}/>
    </div>
    </>
  );
}