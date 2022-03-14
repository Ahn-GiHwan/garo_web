import React from "react";
import { BiSearch } from "react-icons/bi";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";

function SearchButton() {
  const { isDark } = useThemeState();

  return (
    <NavIconButton color="rgb(123, 169, 73)">
      <BiSearch size="30" color={isDark ? "white" : "black"} />
    </NavIconButton>
  );
}

export default SearchButton;
