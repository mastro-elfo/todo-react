import React, { useState } from "react";
import PropTypes from "prop-types";

import { Grid, TextField } from "@material-ui/core";

import Button from "./LoadingButton";
import PasswordField from "./PasswordField";

export default function LoginForm({
  onLogin = () => {},
  UsernameProps = {},
  PasswordProps = {},
  ButtonProps = {},
  ButtonLabel = "Login"
}) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setLoading(true);
    onLogin(username, password)
      .catch(err => {
        console.error(err);
      })
      .then(() => setLoading(false));
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Username"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
          {...UsernameProps}
        />
      </Grid>
      <Grid item xs={12}>
        <PasswordField
          fullWidth
          variant="outlined"
          label="Password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          {...PasswordProps}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoginClick}
          loading={loading}
          {...ButtonProps}
        >
          {ButtonLabel}
        </Button>
      </Grid>
    </Grid>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
  UsernameProps: PropTypes.object,
  PasswordProps: PropTypes.object,
  ButtonProps: PropTypes.object,
  ButtonLabel: PropTypes.node
};
