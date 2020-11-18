import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ed2b91",
      main: "#a00d5b",
    },
    secondary: {
      light: "#0fa7ba",
      main: "#1591a0",
    },
    warning: {
      main: "#f0db44",
    },
  },
});

export default theme;
