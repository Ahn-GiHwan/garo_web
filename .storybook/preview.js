import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContextProvider from "../src/context/ContextProvider";
import { darkTheme, lightTheme } from "../src/style/theme";
import GlobalStyles from "../src/style/GlobalStyles";

export const decorators = [
  (Story) => {
    const isDark = false;
    const queryClient = new QueryClient();
    return (
      <BrowserRouter>
        <ContextProvider>
          <QueryClientProvider client={queryClient}>
            <RenderAfterNavermapsLoaded ncpClientId={process.env.REACT_APP_CLIENT_ID}>
              <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Story />
              </ThemeProvider>
            </RenderAfterNavermapsLoaded>
          </QueryClientProvider>
        </ContextProvider>
      </BrowserRouter>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs",
  previewTabs: {
    canvas: { hidden: true },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
