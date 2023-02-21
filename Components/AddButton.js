import * as React from "react";
import Button from "@mui/material/Button";

export default function AddButton(props) {
  return (
    <Button
      disabled={props.disabled}
      type = "submit"
      variant="outlined"
    >
     {props.text || "ADD"}
    </Button>
  );
}
