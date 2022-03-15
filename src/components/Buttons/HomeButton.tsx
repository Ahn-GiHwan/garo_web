import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";

function HomeButton() {
  const { isDark } = useThemeState();

  return (
    <Link to="/" aria-label="Go Map Button">
      <NavIconButton color="rgb(123, 169, 73)">
        <AiFillHome size="30" color={isDark ? "white" : "black"} />
      </NavIconButton>
    </Link>
  );
}

export default HomeButton;
