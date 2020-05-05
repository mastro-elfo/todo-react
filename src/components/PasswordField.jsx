import React, { useState } from "react";

import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export default function(props) {
  const [hide, setHide] = useState(true);

  const handleToggle = () => setHide(!hide);

  return (
    <TextField
      type={hide ? "password" : "text"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="inherit"
              title="Toggle visibility"
              onClick={handleToggle}
              tabIndex={-1}
            >
              {hide ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
    />
  );
}
