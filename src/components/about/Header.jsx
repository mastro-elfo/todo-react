import React, { Fragment } from "react";

import { withRouter } from "react-router-dom";

import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import GrowTypography from "../GrowTypography";

function AboutHeader({ history: { goBack } }) {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" title="Go Back" onClick={() => goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <GrowTypography variant="h6" color="inherit">
            About
          </GrowTypography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

export default withRouter(AboutHeader);
