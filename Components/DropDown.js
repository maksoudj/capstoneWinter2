
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme({
    palette: {
      neutral: {
        main: 'white',
        contrastText: 'black',
      },
    },
  });
   
   export default function DropDown(props) {
    return (
        <ThemeProvider theme={theme}>
      <Autocomplete
        disablePortal
        id= {props.id}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
        sx={{ marginBottom : '1rem'}}
        renderInput={(params) => <TextField {...params} label= {props.label} variant='filled' size = 'small'/>}
      />
      </ThemeProvider>
    );
  }