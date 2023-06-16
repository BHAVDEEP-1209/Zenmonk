import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="admin"
      >
        <FormControlLabel value="admin" control={<Radio />} label="Admin"  />
        <FormControlLabel value="vendor" control={<Radio />} label="Vendor" />
        <FormControlLabel value="customer" control={<Radio />} label="Customer" />
        
      </RadioGroup>
    </FormControl>
  );
}