import * as React from "react";
import { TextField } from "@mui/material";

const TypoText = (props: any) => {
  return (
    <TextField
      fullWidth
      hiddenLabel
      placeholder={props.placeholder}
      variant="outlined"
      size="small"
      
    >
      {props.placeholder}
    </TextField>
  );
};
export default TypoText;
