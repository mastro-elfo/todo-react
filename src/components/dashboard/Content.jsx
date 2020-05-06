import React, { useEffect, useState } from "react";

import { useSnackbar } from "notistack";

import BoxContainer from "../BoxContainer";
import NewItem from "./NewItem";
import ToDoList from "./ToDoList";
import { create, load, save } from "./items";
import { get as getOption } from "./options";

export default function DashboardContent() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    load()
      .then(itms => setItems(itms))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  }, [enqueueSnackbar]);

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
      <ToDoList
        filter={getOption("filter", v => v === "true") ? filter : ""}
        items={items}
        onChange={handleChangeItems}
      />
    </BoxContainer>
  );
}
