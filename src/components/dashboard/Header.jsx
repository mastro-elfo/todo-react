import React, { Fragment } from "react";

import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import GrowTypography from "../GrowTypography";

export default function DashboardHeader({ onOpen }) {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" title="Open" onClick={onOpen}>
            <MenuIcon />
          </IconButton>
          <GrowTypography variant="h6" color="inherit">
            Dashboard
          </GrowTypography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
