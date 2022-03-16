import React from "react";
import styled from "styled-components";
import MapButton from "../components/Buttons/MapButton";
import ChartButton from "../components/Buttons/ChartButton";
import ExcelButton from "../components/Buttons/ExcelButton";
import ThemeToggleButton from "../components/ThemeToggleButton";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  user-select: none;
`;

const Main = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  max-width: 1440px;
  height: 300px;
  padding-top: 80px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.subBg};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const NavIcons = styled.div`
  display: flex;
`;
const Empty = styled.div`
  width: 20px;
`;

function Home() {
  return (
    <Container>
      <Main>
        <Title>가로 휴지통</Title>
        <NavIcons>
          <MapButton />
          <Empty />
          <ChartButton />
        </NavIcons>
        <ExcelButton />
        <ThemeToggleButton />
      </Main>
    </Container>
  );
}

export default Home;
