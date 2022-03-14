import React from "react";
import { FaList } from "react-icons/fa";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";

function ListButton({ isOpen, onClick }: { isOpen: boolean; onClick?: any }) {
  const { isDark } = useThemeState();

  return (
    <NavIconButton color="pink" select={isOpen} onClick={onClick}>
      <FaList size="30" color={isDark ? "white" : "black"} />
    </NavIconButton>
  );
}

export default ListButton;
