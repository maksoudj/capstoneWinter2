
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
/**************************************************************************************
Component: DropDown
Function: This component creates a dropdown menu using MUI (Material UI) Autocomplete
and TextField components. It receives props such as id, value, onChange, options, and
label and uses them to render the dropdown menu.
*------------------------------------------------------------------------------------------------
Input:
Parameters - props: An object containing id, value, onChange, options, and label as its properties.
Output:
Return – This function returns a JSX element that renders the Autocomplete and TextField components
from MUI and creates a dropdown menu.
**************************************************************************************/
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
      <Autocomplete className = 'rounded-t-md'
        disablePortal
        id= {props.id}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
        sx={{ marginBottom : '1rem', backgroundColor: "White" }}
        renderInput={(params) => <TextField {...params} label= {props.label} variant='filled' size = 'small' />}
      />
      </ThemeProvider>
    );
  }