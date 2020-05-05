import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  AppBar,
  CircularProgress,
  IconButton,
  Toolbar
} from "@material-ui/core";

import GrowTypography from "./GrowTypography";

export default function LoadingHeader({ title = "Loading" }) {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <CircularProgress color="inherit" size={20} />
          </IconButton>
          <GrowTypography variant="h6" color="inherit">
            {title}
          </GrowTypography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

LoadingHeader.propTypes = {
  title: PropTypes.string
};
