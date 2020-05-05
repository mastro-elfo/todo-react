import React from "react";

import { Box, Container } from "@material-ui/core";

/**
 * Puts a `Box` inside a `Container`.
 * Children are rendered inside box and all other props are passed to `Box` element
 * This is useful because you can define a default style for the `Box` element
 * @param       {[type]} children [description]
 * @param       {[type]} props    [description]
 * @constructor
 */
export default function BoxContainer({ children, ...props }) {
  return (
    <Container>
      <Box pt={1} {...props}>
        {children}
      </Box>
    </Container>
  );
}
