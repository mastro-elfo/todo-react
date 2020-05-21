import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  print: {
    "@media screen": {
      display: "none"
    }
  },
  noPrint: {
    "@media print": {
      display: "none"
    }
  }
});

export function Print({ children }) {
  const classes = useStyles();
  return <div className={classes.print}>{children}</div>;
}

export function NoPrint({ children }) {
  const classes = useStyles();
  return <div className={classes.noPrint}>{children}</div>;
}
