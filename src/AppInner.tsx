import React from "react";
import { ThemeProvider } from "styled-components";
import { useThemeState } from "./context/ThemeState";
import Router from "./routes/Router";
import GlobalStyles from "./style/GlobalStyles";
import { darkTheme, lightTheme } from "./style/theme";

function AppInner() {
  const { isDark } = useThemeState();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default AppInner;
