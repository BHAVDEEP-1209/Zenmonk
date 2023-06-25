import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SaveOption(props) {
    const handleChange = (e)=>{
        console.log(e.target.value);
        props.state((prev)=>{
            return {
                ...prev,
                "saveOption" : e.target.value
            }
        });
    }
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Save as:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="publish"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="publish" control={<Radio />} label="Publish" onChange={handleChange}/>
        <FormControlLabel value="draft" control={<Radio />} label="Draft" onChange={handleChange}/>
      </RadioGroup>
    </FormControl>
  );
}