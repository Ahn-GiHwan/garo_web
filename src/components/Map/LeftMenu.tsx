import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ChartButton from "../Buttons/ChartButton";
import HomeButton from "../Buttons/HomeButton";
import SearchButton from "../Buttons/SearchButton";
import ListButton from "../Buttons/ListButton";
import { useCallback } from "react";

const Container = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75px;
  height: 100vh;
  padding: 10px;
  border-right: 5px solid ${({ theme, isOpen }) => (isOpen ? "pink" : theme.color)};
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
  /* margin-left: ${({ isOpen }) => (isOpen ? 0 : "-250px")}; */
  flex-direction: column;
  width: 170px;
  background-color: ${({ theme }) => theme.bg};
  transition: 0.1s ease-in-out;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 3px;
    background-color: gray;
  }
  ::-webkit-scrollbar-thumb {
    background-color: pink;
  }
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

function LeftMenu({ data }: { data: Data[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const onListToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Container isOpen={isOpen}>
      <HomeButton />
      <Empty />
      <ChartButton />
      <Empty />
      <ListButton isOpen={isOpen} onClick={onListToggle} />
      <Empty />
      <SearchButton />
      <BoroughList isOpen={isOpen}>
        {data.map((item) => (
          <BoroughButton>
            <BoroughName key={item.id}>{item.borough}</BoroughName>
          </BoroughButton>
        ))}
      </BoroughList>
    </Container>
  );
}

export default LeftMenu;
