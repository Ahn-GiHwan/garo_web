import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {  
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.subBg};
`;

const Spin = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: dashed 5px ${({ theme }) => theme.color};
  animation: ${spin} 1.5s infinite linear;
`;

function Loading() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}

export default Loading;
