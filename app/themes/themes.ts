"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#272727",
      light: "#fffff",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body1" },
          style: {
            marginTop: "3px",
            fontSize: "0.875rem", 
            fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
          },
        },
      ],
    },
  },
});

export default theme;
