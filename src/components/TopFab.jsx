import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Fab, useScrollTrigger, Zoom } from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(theme => ({
  Fab: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: theme.zIndex.modal
  }
}));

export default function TopFab({ threshold = 100, ...others }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold });

  const handleClick = event => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        color="secondary"
        size="small"
        onClick={handleClick}
        className={classes.Fab}
        title="Move to Top"
        {...others}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

TopFab.propTypes = {
  // Minimum scroll before show the button
  threshold: PropTypes.number
};
