import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ChartButton from "../Buttons/ChartButton";
import HomeButton from "../Buttons/HomeButton";
import ListButton from "../Buttons/ListButton";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import MapButton from "../Buttons/MapButton";

const Container = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75px;
  height: 100vh;
  padding: 10px;
  border-right: 5px solid ${({ theme }) => theme.subBg};
`;

const Empty = styled.div`
  height: 10px;
`;

const BoroughList = styled.div<{ isOpen: boolean }>`
  z-index: ${({ isOpen }) => (isOpen ? 1 : 0)};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 75px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  display: flex;
  flex-direction: column;
  width: 170px;
  background-color: ${({ theme }) => theme.bg};
  transition: 0.1s ease-in-out;
  overflow-y: scroll;
`;

const BoroughButton = styled.button`
  text-align: start;
`;

const BoroughName = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border-bottom: 1px solid gray;
  padding: 10px 5px;
  color: ${({ theme }) => theme.color};
  transition: 0.1s ease-in-out;
  :hover {
    padding-left: 15px;
    font-weight: bold;
  }
`;

type Data = {
  id: number;
  borough: string;
};

function LeftMenu({ data }: { data?: Data[] }) {
  const { pathname } = useLocation();
  const isChart = pathname === "/chart";
  const [isOpen, setIsOpen] = useState(false);

  const onListToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Container isOpen={isOpen}>
      <HomeButton />
      <Empty />
      {isChart ? <MapButton /> : <ChartButton />}
      {isChart || (
        <>
          <Empty />
          <ListButton isOpen={isOpen} onClick={onListToggle} />
          <BoroughList isOpen={isOpen}>
            {data?.map((item) => (
              <BoroughButton>
                <BoroughName key={item.id}>{item.borough}</BoroughName>
              </BoroughButton>
            ))}
          </BoroughList>
        </>
      )}
    </Container>
  );
}

export default LeftMenu;
