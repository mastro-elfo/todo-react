import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Print, NoPrint } from "./Print";
import TopFab from "./TopFab";

export default function Page({
  content = null,
  drawer = null,
  header = null,
  print = null,
  topFab = true
}) {
  return (
    <Fragment>
      <NoPrint>
        {topFab && <TopFab />}
        {!!drawer && drawer}
        {!!header && header}
        {!!content && content}
      </NoPrint>
      <Print>{!!print && print}</Print>
    </Fragment>
  );
}

Page.propTypes = {
  topFab: PropTypes.bool,
  content: PropTypes.element,
  drawer: PropTypes.element,
  header: PropTypes.element,
  print: PropTypes.element
};
