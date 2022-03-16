import React from "react";
import { RiBarChart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useThemeState } from "../../context/ThemeState";
import MobileCheck from "../../Hooks/MobileCheck";
import { NavIconButton } from "./style";

function ChartButton() {
  const { isDark } = useThemeState();
  const isMobile = MobileCheck();

  return (
    <Link to="/chart" aria-label="Go Chart Button">
      <NavIconButton color="skyblue">
        <RiBarChart2Fill size={isMobile ? "20" : "30"} color={isDark ? "white" : "black"} />
      </NavIconButton>
    </Link>
  );
}

export default React.memo(ChartButton);
