import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppInner from "./AppInner";
import ContextProvider from "./context/ContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <AppInner />
        </QueryClientProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
