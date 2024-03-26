import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FC, ReactElement, useEffect, useState } from "react";
import ThemeContext from "./themeContext";

const MUITheme: FC<{ children: ReactElement }> = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(true);
  // Load site mode from LocalStorage
  useEffect(() => {
    const theme = localStorage.getItem("siteTheme");

    if (theme == "light") {
      setToggleTheme(false);
    } else {
      setToggleTheme(true);
    }
  }, []);

  const theme = createTheme({
    palette: {
      mode: !toggleTheme ? "light" : "dark",
      primary: {
        main: "#C361F0",
        light: "#d274fd",
      },
      background: {
        default: !toggleTheme ? "#ffffff" : "#0C151C",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme, setToggleTheme }}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default MUITheme;
