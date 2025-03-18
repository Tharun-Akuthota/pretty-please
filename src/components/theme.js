import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a1b9a", // Purple
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4a148c", // Dark Purple
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff",
    },
    text: {
      primary: "#333333", // Dark gray for readability
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#666666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1rem",
          padding: "10px 20px",
        },
      },
    },
  },
});

export default theme;
