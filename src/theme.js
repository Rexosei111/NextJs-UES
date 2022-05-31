import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#54b6ab",
    },
    secondary: {
      main: "#e0e0e0",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#54b6ab",
    },
    background: {
      paper: "#212121",
      default: "#121212",
    },
  },
});

export default responsiveFontSizes(theme);
