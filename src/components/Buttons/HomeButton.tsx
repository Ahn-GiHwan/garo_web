import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";
import MobileCheck from "../../Hooks/MobileCheck";

function HomeButton() {
  const { isDark } = useThemeState();
  const isMobile = MobileCheck();

  return (
    <Link to="/" aria-label="Go Map Button">
      <NavIconButton color="rgb(123, 169, 73)">
        <AiFillHome size={isMobile ? "20" : "30"} color={isDark ? "white" : "black"} />
      </NavIconButton>
    </Link>
  );
}

export default HomeButton;
