import React from "react";
import styled from "styled-components";

const List = styled.div`
  margin: 10px;
  padding: 10px;
  border-bottom: 3px double gray;
  @media screen and (max-width: 450px) {
    margin: 5px;
    padding: 5px;
  }
`;

const BoroughButton = styled.button<{ select: boolean }>`
  margin: 5px 5px 5px 0;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 10px;
  padding: 5px;
  background-color: ${({ select }) => select && "rgb(93, 98, 181)"};
  color: ${({ select, theme }) => (select ? "white" : theme.color)};
  transform: ${({ select }) => (select ? "scale(1.1)" : "scale(1)")};
  @media screen and (max-width: 450px) {
    margin: 3px 3px 3px 0;
    padding: 3px;
    font-size: 12px;
  }
`;

const BoroughButtonText = styled.span``;

type Boroughs = {
  id: number;
  borough: string;
};

function BoroughList({
  borough,
  boroughs,
  onSelectBorough,
}: {
  borough: string;
  boroughs: Boroughs[];
  onSelectBorough: any;
}) {
  return (
    <List>
      {boroughs.map(({ id, borough: name }) => (
        <BoroughButton key={id} select={borough === name} onClick={() => onSelectBorough(name)}>
          <BoroughButtonText>{name}</BoroughButtonText>
        </BoroughButton>
      ))}
    </List>
  );
}

export default React.memo(BoroughList);
