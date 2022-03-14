import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppInner from "./AppInner";
import ContextProvider from "./context/ContextProvider";
const { RenderAfterNavermapsLoaded } = require("react-naver-maps");

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <RenderAfterNavermapsLoaded ncpClientId={process.env.REACT_APP_CLIENT_ID}>
            <AppInner />
          </RenderAfterNavermapsLoaded>
        </QueryClientProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
