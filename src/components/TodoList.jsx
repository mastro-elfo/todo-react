import React, { useState, useEffect } from "react";

import { styled } from "@material-ui/core/styles";
import {
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  TextField
} from "@material-ui/core";

import AddBoxIcon from "@material-ui/icons/AddBox";
import CancelIcon from "@material-ui/icons/Cancel";

export default function TodoList({
  onChange = () => {},
  ListItemProps = {},
  TextFieldProps = {},
  ...others
}) {
  const [list, setList] = useState([]);

  const handleChangeListItem = index => ({ target: { value } }) => {
    const _list = list.slice();
    _list[index] = value;
    setList(_list);
  };

  const handleDeleteListItem = index => () => {
    const _list = list.slice();
    _list.splice(index, 1);
    setList(_list);
  };

  const handleAddListItem = () => {
    setList(["", ...list]);
  };

  useEffect(() => {
    onChange(list);
  }, [list, onChange]);

  return (
    <List {...others}>
      <ListItem
        button
        onClick={handleAddListItem}
        title="Add item"
        {...ListItemProps}
      >
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
      </ListItem>
      {list.map((item, i) => (
        <ListItem key={i} {...ListItemProps}>
          <StyledTextField
            fullWidth
            value={item}
            onChange={handleChangeListItem(i)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="delete">
                  <IconButton
                    color="inherit"
                    onClick={handleDeleteListItem(i)}
                    title="Delete item"
                    tabIndex={-1}
                  >
                    <CancelIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            {...TextFieldProps}
          />
        </ListItem>
      ))}
    </List>
  );
}

const StyledTextField = styled(TextField)({
  "& .delete": { display: "none" },
  "&:hover .delete, &  input:focus + .delete": {
    display: "flex"
  }
});
