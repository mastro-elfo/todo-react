import React from "react";

import Page from "../Page";
import Header from "./Header";
import Content from "./Content";

export default function AboutView() {
  return <Page header={<Header />} content={<Content />} />;
}
