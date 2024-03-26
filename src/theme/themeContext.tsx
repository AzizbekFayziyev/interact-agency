import React, { createContext } from "react";

interface themeType {
  toggleTheme: boolean;
  setToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<themeType | null>(null);

export default ThemeContext;
