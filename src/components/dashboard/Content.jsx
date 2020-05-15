import React, { useEffect, useState } from "react";

import { useSnackbar } from "notistack";

import BoxContainer from "../BoxContainer";
import NewItem from "./NewItem";
import ProgressBar from "./ProgressBar";
import ToDoList from "./ToDoList";

import { create, load, save } from "./items";
import { get as getOption } from "./options";

export default function DashboardContent() {
  // List of all items
  const [items, setItems] = useState([]);
  // String to filter items
  const [filter, setFilter] = useState("");
  // Other hooks
  const { enqueueSnackbar } = useSnackbar();

  // On first render load items
  useEffect(() => {
    // Load items
    load()
      // Filter !deleted
      .then(items => items.filter(({ deleted }) => !deleted))
      // Set state
      .then(items => setItems(items))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  }, [enqueueSnackbar]);

  // When an item changes save items
  useEffect(() => {
    save(items).catch(err => {
      console.error(err);
      enqueueSnackbar(err.message, { variant: "error" });
    });
  }, [enqueueSnackbar, items, items.length]);

  const handleCreateItem = value => {
    create(value)
      .then(item => setItems([...items, item]))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  };

  const handleFilter = value => setFilter(value);

  const handleChangeItems = items => setItems(items.slice());

  return (
    <BoxContainer>
      <NewItem onChange={handleFilter} onEnter={handleCreateItem} />
      <ProgressBar items={items} />
      <ToDoList
        filter={getOption("filter", v => v === "true") ? filter : ""}
        items={items}
        onChange={handleChangeItems}
      />
    </BoxContainer>
  );
}
