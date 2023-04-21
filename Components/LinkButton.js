import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';



const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default function LinkButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button disabled = {props.disabled} onClick = {props.onClick}  color="neutral" variant="Text">
      {props.text}
      </Button>
    </ThemeProvider>
  );
}
//component={Link} href={props.action}