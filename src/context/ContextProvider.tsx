import React, { useReducer } from "react";
import { reducer, ThemeDispatchContext, ThemeStateContext } from "./ThemeState";

function ContextProvider({ children }: { children: React.ReactNode }) {
  const isDark = localStorage.getItem("theme") === "true";
  const [state, dispatch] = useReducer(reducer, { isDark });

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export default ContextProvider;
