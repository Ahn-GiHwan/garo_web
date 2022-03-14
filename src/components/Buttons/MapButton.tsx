import React from "react";
import { Link } from "react-router-dom";
import { IoMdMap } from "react-icons/io";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";

function MapButton() {
  const { isDark } = useThemeState();

  return (
    <Link to="map" aria-label="Go Map Button">
      <NavIconButton color="orange">
        <IoMdMap size="30" color={isDark ? "white" : "black"} />
      </NavIconButton>
    </Link>
  );
}

export default MapButton;
