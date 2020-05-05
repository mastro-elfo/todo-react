import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, IconButton } from "@material-ui/core";

import AbsoluteCircularProgress from "./AbsoluteCircularProgress";

export default function LoadingButton({
  children,
  delay = 1000,
  disabled = false,
  isIcon = false,
  loading = false,
  ...others
}) {
  // Display CircularProgress if innerLoading is true
  const [innerLoading, setInnerLoading] = useState(false);

  useEffect(() => {
    // Delay setting innerLoading
    if (loading) {
      const to = setTimeout(setInnerLoading, delay, true);
      return () => clearTimeout(to);
    } else setInnerLoading(false);
  }, [delay, loading]);

  // Use Button or IconButton
  const Component = isIcon ? IconButton : Button;

  return (
    <Component color="inherit" disabled={loading || disabled} {...others}>
      {children}
      {innerLoading && <AbsoluteCircularProgress />}
    </Component>
  );
}

LoadingButton.propTypes = {
  //
  delay: PropTypes.number,
  // Disable button
  disabled: PropTypes.bool,
  // If true, use IconButton; use Button otherwise
  isIcon: PropTypes.bool,
  // Display CircularProgress and disable button
  loading: PropTypes.bool
};
