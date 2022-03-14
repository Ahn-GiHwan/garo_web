import React, { createContext, Dispatch, useContext } from "react";

type State = {
  isDark: boolean;
};

type Action = { type: "init"; storage: boolean } | { type: "toggle" };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "init":
      return {
        isDark: action.storage,
      };
    case "toggle":
      return {
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

type ThemeDispatch = Dispatch<Action>;

export const ThemeStateContext = createContext<State | null>(null);
export const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

export function useThemeState() {
  const state = useContext(ThemeStateContext);
  if (!state) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
