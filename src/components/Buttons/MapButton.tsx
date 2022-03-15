import React from "react";
import { Link } from "react-router-dom";
import { IoMdMap } from "react-icons/io";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";
import MobileCheck from "../../Hooks/MobileCheck";

function MapButton() {
  const { isDark } = useThemeState();
  const isMobile = MobileCheck();

  return (
    <Link to="/map" aria-label="Go Map Button">
      <NavIconButton color="orange">
        <IoMdMap size={isMobile ? "20" : "30"} color={isDark ? "white" : "black"} />
      </NavIconButton>
    </Link>
  );
}

export default MapButton;
