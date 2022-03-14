import React from "react";
import styled from "styled-components";

const List = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

const BoroughButton = styled.button<{ select: boolean }>`
  font-size: ${({ select }) => (select ? "20px" : "12px")};
`;

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
          <span>{name}</span>
        </BoroughButton>
      ))}
    </List>
  );
}

export default BoroughList;
