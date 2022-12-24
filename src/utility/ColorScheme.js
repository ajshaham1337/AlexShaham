import { createTheme } from "@mui/material";

// https://bareynol.github.io/mui-theme-creator/
// https://mui.com/material-ui/customization/default-theme/

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181818",
      paper: "#000000",
    },
  },
  // fontFamily: font // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

export default theme;
