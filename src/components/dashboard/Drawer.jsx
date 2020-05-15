import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  // ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
  Switch
} from "@material-ui/core";

// see: https://material-ui.com/components/material-icons/
import GitHubIcon from "@material-ui/icons/GitHub";
import InfoIcon from "@material-ui/icons/Info";

import { get as getOption, set as setOption } from "./options";

const LISTS = [
  // {
  //   header: "ListSubheader",
  //   items: [
  // {type: 'divider'},
  // {type: 'item', title: 'ItemName', href: '/', Icon: IconName}
  // ]
  // }
  {
    items: [
      {
        type: "item",
        title: "Github",
        href: "https://github.com/mastro-elfo/todo-react",
        Icon: GitHubIcon
      },
      { type: "item", title: "About", href: "/about", Icon: InfoIcon }
    ]
  }
];

const LARGER = false;

export default function DashboardDrawer({ open, onClose, onOpen }) {
  const [filter, setFilter] = useState(getOption("filter", v => v === "true"));
  const [progress, setProgress] = useState(
    getOption("progress", v => v === "true")
  );
  // TODO: Add options showDeleted

  useEffect(() => {
    setOption("filter", filter);
  }, [filter]);

  useEffect(() => {
    setOption("progress", progress);
  }, [progress]);

  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <List subheader={<ListSubheader>Options</ListSubheader>}>
        <ListItem button onClick={() => setFilter(!filter)}>
          <ListItemIcon>
            <Switch checked={filter} />
          </ListItemIcon>
          <ListItemText primary="Filter" secondary={filter ? "On" : "Off"} />
        </ListItem>
        <ListItem button onClick={() => setProgress(!progress)}>
          <ListItemIcon>
            <Switch checked={progress} />
          </ListItemIcon>
          <ListItemText
            primary="Progress"
            secondary={progress ? "On" : "Off"}
          />
        </ListItem>
      </List>

      {LISTS.map(({ header, items }, listIndex) => (
        <List
          key={listIndex}
          subheader={<ListSubheader>{header}</ListSubheader>}
        >
          {items.map((item, itemIndex) => (
            <DrawerItem key={itemIndex} {...item} />
          ))}
        </List>
      ))}
    </SwipeableDrawer>
  );
}

const DrawerItem = ({ type, title, href, Icon }) => {
  // TODO: add primary && secondary props
  // TODO: handle external links
  const { push } = useHistory();

  if (type === "divider") {
    return <Divider />;
  } else if (type === "item") {
    const isLink = !!href;
    const isExternal = isLink && href.startsWith("http");
    return (
      <ListItem
        button={isLink}
        title={title}
        onClick={
          isExternal
            ? () => window.open(href)
            : isLink
            ? () => push(href)
            : null
        }
      >
        {!!Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={title} />
        {LARGER && (
          <ListItemIcon>
            <span />
          </ListItemIcon>
        )}
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ListItemText primary={type} secondary="Unknown type" />
    </ListItem>
  );
};
