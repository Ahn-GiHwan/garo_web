import React from "react";
import { NavIconButton } from "./style";
import { useThemeState } from "../../context/ThemeState";
import { FaList } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import MobileCheck from "../../Hooks/MobileCheck";

type List = { isOpen: boolean; onClick?: any };

function ListButton({ isOpen, onClick }: List) {
  const { isDark } = useThemeState();
  const isMobile = MobileCheck();

  return (
    <NavIconButton color="pink" select={isOpen} onClick={onClick}>
      {isOpen ? (
        <AiOutlineClose size={isMobile ? "20" : "30"} color={isDark ? "white" : "black"} />
      ) : (
        <FaList size={isMobile ? "20" : "30"} color={isDark ? "white" : "black"} />
      )}
    </NavIconButton>
  );
}

export default React.memo(ListButton);
