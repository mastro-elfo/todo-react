import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";

import BoxContainer from "../BoxContainer";
import Markdown from "../Markdown";

export default function AboutContent() {
  const APPVERSION = "0.1.0";
  const APPNAME = "ToDo React";
  const APPDESCRIPTION = "Simple To-Do list build with react";
  const DEVELOPERS = [
    {
      name: "mastro-elfo",
      email: "francesco.209@gmail.com",
      role: "Main Developer"
    }
  ];

  return (
    <BoxContainer>
      <List subheader={<ListSubheader>Application</ListSubheader>}>
        <ListItem>
          <ListItemText primary={APPNAME} secondary={APPDESCRIPTION} />
        </ListItem>
        <ListItem>
          <ListItemText primary={APPVERSION} secondary="Version" />
        </ListItem>
      </List>
      <List
        subheader={
          <ListSubheader>
            {DEVELOPERS.length === 1 ? "Developer" : "Developers"}
          </ListSubheader>
        }
      >
        {DEVELOPERS.map(({ name, email, role }, index) => (
          <ListItem
            key={index}
            button={!!email}
            onClick={() =>
              !!email && `mailto:${email}?subject=${APPNAME}%20${APPVERSION}`
            }
            title={!!email && "Send an email"}
          >
            <ListItemText
              primary={`${name}${email ? " (" + email + ")" : ""}`}
              secondary={role}
            />
            {!!email && (
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
            )}
          </ListItem>
        ))}
      </List>

      <Markdown source={source} />
    </BoxContainer>
  );
}

const source = `
### How it's made

This application is made with React and MaterialUI.`;
