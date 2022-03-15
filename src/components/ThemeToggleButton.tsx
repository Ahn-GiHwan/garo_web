import React, { useCallback } from "react";
import styled from "styled-components";
import { IoMdMoon } from "react-icons/io";
import { BsSun } from "react-icons/bs";
import { useThemeDispatch, useThemeState } from "../context/ThemeState";
import { useLocation } from "react-router-dom";

const Button = styled.button<{ isHome: boolean }>`
  position: absolute;
  top: ${({ isHome }) => (isHome ? "10px" : "auto")};
  right: ${({ isHome }) => (isHome ? "10px" : "auto")};
  bottom: ${({ isHome }) => (isHome ? "auto" : "20px")};
  left: ${({ isHome }) => (isHome ? "auto" : "20px")};
  display: flex;
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 50px;
  padding: 5px;
  transition: 0.1s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`;

function ThemeToggleButton() {
  const { isDark } = useThemeState();
  const dispatch = useThemeDispatch();

  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const onToggle = useCallback(() => {
    dispatch({ type: "toggle" });
  }, [dispatch]);

  return (
    <Button isHome={isHome} onClick={onToggle} aria-label="Theme Toggle Button">
      {isDark ? <BsSun color="white" size="18" /> : <IoMdMoon size="18" />}
    </Button>
  );
}

export default ThemeToggleButton;
