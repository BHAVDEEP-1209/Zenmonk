import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function TemplateRadio(props) {
    const handleChange = (e)=>{
        props.state((prev)=>{
            return {
                ...prev,
                "template" : e.target.value
            }
        });
    }
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select Template</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="template1"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="template1" control={<Radio />} label="Template1" onChange={handleChange}/>
        <FormControlLabel value="template2" control={<Radio />} label="Template2" onChange={handleChange}/>
        <FormControlLabel value="template3" control={<Radio />} label="Template3" onChange={handleChange}/>
      </RadioGroup>
    </FormControl>
  );
}