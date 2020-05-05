import React from "react";

import { styled } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const AbsoluteCircularProgress = styled(CircularProgress)({
  position: "absolute"
});

export default props => <AbsoluteCircularProgress color="inherit" {...props} />;
