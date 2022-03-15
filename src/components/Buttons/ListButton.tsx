import React from "react";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";
import { FaList } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function ListButton({ isOpen, onClick }: { isOpen: boolean; onClick?: any }) {
  const { isDark } = useThemeState();

  return (
    <NavIconButton color="pink" select={isOpen} onClick={onClick}>
      {isOpen ? (
        <AiOutlineClose size="30" color={isDark ? "white" : "black"} />
      ) : (
        <FaList size="30" color={isDark ? "white" : "black"} />
      )}
    </NavIconButton>
  );
}

export default ListButton;
