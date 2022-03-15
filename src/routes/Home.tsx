import React from "react";
import styled from "styled-components";
import MapButton from "../components/Buttons/MapButton";
import ChartButton from "../components/Buttons/ChartButton";
import ExcelButton from "../components/Buttons/ExcelButton";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  user-select: none;
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 300px;
  padding-top: 80px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.subBg};
  color: black;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;

const NavIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
`;

function Home() {
  return (
    <Container>
      <Main>
        <Title>가로 휴지통</Title>
        <NavIcons>
          <MapButton />
          <ChartButton />
        </NavIcons>
        <ExcelButton />
      </Main>
    </Container>
  );
}

export default Home;
