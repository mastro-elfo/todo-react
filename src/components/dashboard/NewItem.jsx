import React, { createRef, useState } from "react";

import {
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField
} from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const ref = createRef();

export default function NewItem({ onEnter = () => {}, onChange = () => {} }) {
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    onEnter(value);
    setValue("");
    onChange("");
    ref.current.focus();
  };

  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      handleAddItem();
    }
  };

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    onChange(value);
  };

  return (
    <List>
      <ListItem>
        <TextField
          fullWidth
          label="Add an item"
          ref={ref}
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  title="Click to add"
                  disabled={!value.trim()}
                  onClick={handleAddItem}
                >
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </ListItem>
    </List>
  );
}
