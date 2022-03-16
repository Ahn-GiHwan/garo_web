import React from "react";
import styled from "styled-components";
import HomeButton from "../Buttons/HomeButton";
import MapButton from "../Buttons/MapButton";
import ThemeToggleButton from "../ThemeToggleButton";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75px;
  height: 100vh;
  padding: 10px;
  border-right: 5px solid ${({ theme }) => theme.subBg};
  @media screen and (max-width: 450px) {
    width: 65px;
    padding: 3px;
  }
`;

const Empty = styled.div`
  height: 10px;
`;

function ChartLeftMenu() {
  return (
    <Container>
      <HomeButton />
      <Empty />
      <MapButton />
      <ThemeToggleButton />
    </Container>
  );
}

export default React.memo(ChartLeftMenu);
