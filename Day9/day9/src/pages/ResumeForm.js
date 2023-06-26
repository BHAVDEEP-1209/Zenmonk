import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {deleteItem, setResumeValue} from "../slices/resumeSlice"
import { useNavigate, useParams,} from 'react-router-dom';
import BasicModal from '../components/BasicModal';
import TemplateRadio from '../components/TemplateRadio';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import {EnterOutlined }from '@ant-design/icons';
import tempscreen1 from "../assets/temp1.png"
import tempscreen2 from "../assets/temp2.png"
import tempscreen3 from "../assets//temp3.png"
import SaveOption from '../components/SaveOption';
import { deleteEditedItem } from '../slices/resumeSlice';

const defaultTheme = createTheme();

export default function ResumeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const number = useSelector(state=>state.reducer.user.user.number);
  const [isSubmit,setIsSubmit] = React.useState(false);
  const [formErrors,setFormErrors] = React.useState({});
  let {editId} = useParams();
  const resume = useSelector(state => state.reducer.resume.resumes);
  const [hover,setHover] = React.useState({});

  // intializing form values
  const initialValues = {fName : "", lName : "", email : "" ,skills : "" , img : "", graduation : "" , school : "" , job : "", employer : "" , job_desc : "", createdBy : number, address : "" , template : "template1" , saveOption : "publish" , id : ""}
  const [formValues,setFormValues] = React.useState(initialValues);

   // handle on change event on input values of form
   const handleChange=(event)=>{
    const {name,value} = event.target;
    setFormErrors((prev)=>{
      return {
        ...prev,
        [name] : ""
      }
    })
      setFormValues((prev)=>{
        return {
          ...prev,
          [name] : value
        }
      })
   }

 /// image handling
   const handleFileChange=(e)=>{
    setFormErrors((prev)=>{
      return {
        ...prev,
        img : ""
      }
    })
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

  // on create Resume
  const handleSubmit = (event) => {
    event.preventDefault();
      setFormValues((prev)=>{
        return {
          ...prev,
          id : Math.floor(Math.random() * 100)
        }
      })
      if(formValues.saveOption=="draft"){
        dispatch(setResumeValue(formValues));
        navigate("/homepage");
      }else{
        setFormErrors(validate(formValues));
        setIsSubmit(true);  
      } 
  };

  React.useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      dispatch(setResumeValue(formValues));
      navigate("/homepage");
    }
  },[formErrors])

  //validation
  

  const validate=(values)=>{
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if(!values.fName){
      errors.fName = "First Name required!";
    }
    if(!values.lName){
      errors.lName = "Last Name required!";
    }
    if(!values.email){
      errors.email = "Email required!";
    }else if(!regex.test(values.email)){
      errors.email = "Invalid Email Address!"
    }
    if(!values.address){
      errors.address = "Address required!";
    }
    if(!values.img){
      errors.img = "Image required!";
    }
    if(!values.skills){
      errors.skills = "Skills required!";
    }
    if(!values.school){
      errors.school = "school required!";
    }
    if(!values.job){
      errors.job = "job required!";
    }
    if(!values.graduation){
      errors.graduation = "graduation required!";
    }
    if(!values.employer){
      errors.employer = "employer required!";
    }
    if(!values.job_desc){
      errors.job_desc = "Job Description required!";
    }
    return errors;
    
  }


  //setting the value for edit option

  React.useEffect(()=>{
    if(editId!=undefined){
      const drafts = resume.filter((ele)=>{
        return (ele.createdBy == number && ele.saveOption=="draft")
      })
      setFormValues(drafts.at(editId));
      dispatch(deleteEditedItem(formValues.id));
      
    }
  },[])

  React.useEffect(()=>{
    if(formValues.template=="template1"){
      setHover({hover1 : "hoverClass"})
    }
    else if(formValues.template=="template2"){
      setHover({hover2 : "hoverClass"})
    }else{
      setHover({hover3 : "hoverClass"})
    }
  },[formValues.template])
  


  // material ui form
  return (
    <>
    <div className="resume_div">
    <div className="go_back_button" onClick={()=>{navigate("/homepage")}}>
      <EnterOutlined />
    </div>
    <img src={tempscreen1} alt="" className={`tempScreenShot1 ${hover.hover1}`}/>
    <img src={tempscreen2} alt="" className={`tempScreenShot2 ${hover.hover2}`}/>
    <img src={tempscreen3} alt="" className={`tempScreenShot3 ${hover.hover3}`}/>
    <div className="resume_main_div">



    <h1 style={{textAlign:'center', marginBottom : 0}}>Create Resume</h1>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        >

          {/* header section  */}
          
          <TemplateRadio state={setFormValues}/>
          {/* <Typography component="h1" variant="h5">
            Personal Info
          </Typography> */}
          
          <Box component="form" noValidate onSubmit={handleSubmit} >
           <div className="resumeform_hero_section">
           <Grid container spacing={2} className='div'>
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
                <p className='error'>{formErrors.fName}</p>
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
                  <p className='error'>{formErrors.lName}</p>
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
                <p className='error'>{formErrors.email}</p>
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
                 <p className='error'>{formErrors.address}</p>
              </Grid>
             
           


              {/* image uploading section */}
              <div className="img_upload_section" style={{position : "relative",left: 20 , marginBottom : 5}}>
              <label htmlFor="imgUpload">Upload Image!</label>
              <input type="file" name="" id="imgUpload" onChange={handleFileChange}/>
              </div>
              <p className='error'>{formErrors.img}</p>
  
            </Grid>

            {/* <Typography component="h1" variant="h5">
            Work Info
          </Typography> */}


    
            <Grid container spacing={2} className='div'  >
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
                <p className='error'>{formErrors.job}</p>
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
                <p className='error'>{formErrors.employer}</p>
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
                <p className='error'>{formErrors.job_desc}</p>
              </Grid>
       
            </Grid>
           </div>
        




            {/* <Typography component="h1" variant="h5">
            Skills & Education
          </Typography> */}


     
            <Grid container spacing={2} sx={{marginTop : 1}}>
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
                <p className='error'>{formErrors.school}</p>
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
                <p className='error'>{formErrors.graduation}</p>
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
                <p className='error'>{formErrors.skills}</p>
              </Grid>
         
            </Grid>
            <SaveOption state={setFormValues}/>
            </Box>






            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#916BBF' }}
            >  
              create Resume
            </Button> */}
            <button onClick={handleSubmit} className='resume_create_button'>CREATE</button>
            <button onClick={()=>{setFormValues(initialValues)}} className='resume_create_button'>Cancel resume</button>
          {
            formValues.template=="template1" && <BasicModal form={formValues}/>
          }
          {
            formValues.template=="template2" && <Template2 form={formValues} />
          }
          {
            formValues.template=="template3" && <Template3 form={formValues} />
          }          
     
        </Box>
        
      </Container>
    </ThemeProvider>
    
    
    </div>
    </div>
    </>
  );
}