import { TextField } from "@mui/material";

export default function textfield(props) {
  return (
    <TextField
      id={props.id}
      label={props.label}
      variant="filled"
      margin="normal"
      required={props.required}
      type = "text"
    />
  );
}
