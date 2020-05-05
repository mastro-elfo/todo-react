import React from "react";

// Customize main theme
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// See https://material-ui.com/customization/color/#color for details
import primary from "@material-ui/core/colors/blue";
import secondary from "@material-ui/core/colors/pink";

// See https://material-ui.com/customization/theming/#createmuitheme-options-args-theme for details
const THEME = createMuiTheme({
  palette: {
    primary,
    secondary
  }
});

export default function ThemeWrapper({ children }) {
  return <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>;
}
