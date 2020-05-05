import React, { useState } from "react";

import { useSnackbar } from "notistack";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  // Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  // ListSubheader,
  TextField
} from "@material-ui/core";

import CancelIcon from "@material-ui/icons/Cancel";

export default function ToDoList({
  filter = "",
  items = [],
  onChange = () => {}
}) {
  const handleChange = item => {
    const index = items.findIndex(i => i.uid === item.uid);
    items[index] = item;
    onChange(items);
  };

  const lowerCaseFilter = filter.toLowerCase();
  const filterItems = items.filter(
    ({ deleted, value }) =>
      !deleted && (!filter || value.includes(lowerCaseFilter))
  );

  return (
    <List>
      {filterItems
        .filter(({ complete }) => !complete)
        .map(({ uid, ...props }) => (
          <ToDoItem
            key={uid}
            item={{ uid, ...props }}
            onChange={handleChange}
          />
        ))}
      {filterItems
        .filter(({ complete }) => complete)
        .map(({ uid, ...props }) => (
          <ToDoItem
            key={uid}
            item={{ uid, ...props }}
            onChange={handleChange}
          />
        ))}
    </List>
  );
}

const useStyle = makeStyles({
  Hidden: {
    visibility: "hidden"
  },
  Visible: {
    visibility: "visible"
  }
});

function ToDoItem({ onChange, item }) {
  const { complete, value } = item;

  const [edit, setEdit] = useState(false);
  const [snackbar, setSnackbar] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyle();

  const handleToggle = ev => {
    onChange({ ...item, complete: !complete });
  };

  const handleChange = ({ target: { value } }) => {
    onChange({ ...item, value });
  };

  const handleDelete = () => {
    onChange({ ...item, deleted: true });
    const key = enqueueSnackbar("Item deleted", {
      action: (
        <Button color="inherit" onClick={handleUndo}>
          Undo
        </Button>
      )
    });
    setSnackbar(key);
  };

  const handleUndo = () => {
    onChange({ ...item, deleted: false });
    closeSnackbar(snackbar);
  };

  return (
    <ListItem button onClick={() => setEdit(true)}>
      <ListItemIcon>
        <Checkbox
          title="Click to toggle"
          checked={complete}
          onClick={handleToggle}
        />
      </ListItemIcon>
      {edit ? (
        <TextField
          autoFocus
          fullWidth
          value={value}
          onBlur={() => setEdit(false)}
          onChange={handleChange}
        />
      ) : (
        <ListItemText primary={value} />
      )}
      <ListItemSecondaryAction
        className={edit ? classes.Visible : classes.Hidden}
      >
        <IconButton onMouseDown={handleDelete} title="Click to delete">
          <CancelIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
