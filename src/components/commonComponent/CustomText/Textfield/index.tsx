import * as React from "react";
import { Box, TextField } from "@mui/material";

const TypoText = (props: any) => {
  return (
    <Box>
      <TextField
        fullWidth
        hiddenLabel
        placeholder={props.placeholder}
        variant="outlined"
        size="small"
      >
        {props.placeholder}
      </TextField>
    </Box>
  );
};
export default TypoText;
