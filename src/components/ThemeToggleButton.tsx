import React, { useCallback } from "react";
import styled from "styled-components";
import { IoMdMoon } from "react-icons/io";
import { BsSun } from "react-icons/bs";
import { useThemeDispatch, useThemeState } from "../context/ThemeState";

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 50px;
  padding: 5px;
  transition: 0.1s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 450px) {
    bottom: 8px;
    left: 8px;
  }
`;

function ThemeToggleButton() {
  const { isDark } = useThemeState();
  const dispatch = useThemeDispatch();

  const onToggle = useCallback(() => {
    dispatch({ type: "toggle" });
  }, [dispatch]);

  return (
    <Button onClick={onToggle} aria-label="Theme Toggle Button">
      {isDark ? <BsSun color="white" size="18" /> : <IoMdMoon size="18" color="black" />}
    </Button>
  );
}

export default React.memo(ThemeToggleButton);
