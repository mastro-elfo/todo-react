import React from "react";

import { Box, Collapse, LinearProgress } from "@material-ui/core";

import { get as getOption } from "./options";

export default function ProgressBar({ items = [] }) {
  // List of !deleted items
  const activeItems = items.filter(({ deleted }) => !deleted);

  // Filter completed items
  const completedItems = activeItems.filter(({ complete }) => complete);
  // Complete percentage
  const completed =
    items.length > 0 ? (completedItems.length / activeItems.length) * 100 : 0;

  return (
    <Collapse in={getOption("progress", v => v === "true")}>
      <Box py={1}>
        <LinearProgress
          variant="determinate"
          color={
            completedItems.length === activeItems.length
              ? "secondary"
              : "primary"
          }
          value={completed}
        />
      </Box>
    </Collapse>
  );
}
