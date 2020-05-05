import React from "react";

import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export default withStyles(theme => {
  return {
    head: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.primary.contrastText} !important`,
      textAlign: "center",
      fontWeight: "bold",
      "-webkit-print-color-adjust": "exact"
    }
  };
})(TableCell);
