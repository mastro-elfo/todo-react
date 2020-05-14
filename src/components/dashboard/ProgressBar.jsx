import React from "react";

import { Box, Collapse, LinearProgress } from "@material-ui/core";

import { get as getOption, set as setOption } from "./options";

export default function ProgressBar({ items = [] }) {
  // Filter completed items
  const completedItems = items.filter(({ complete }) => complete);
  // Complete percentage
  const completed =
    items.length > 0 ? (completedItems.length / items.length) * 100 : 0;

  return (
    <Collapse in={getOption("progress", v => v === "true")}>
      <Box py={1}>
        <LinearProgress
          variant="determinate"
          color={
            completedItems.length === items.length ? "secondary" : "primary"
          }
          value={completed}
        />
      </Box>
    </Collapse>
  );
}
