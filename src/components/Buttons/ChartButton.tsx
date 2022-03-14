import React from "react";
import { RiBarChart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useThemeState } from "../../context/ThemeState";
import { NavIconButton } from "./style";

function ChartButton() {
  const { isDark } = useThemeState();

  return (
    <Link to="/chart" aria-label="Go Chart Button">
      <NavIconButton color="skyblue">
        <RiBarChart2Fill size="30" color={isDark ? "white" : "black"} />
      </NavIconButton>
    </Link>
  );
}

export default ChartButton;
