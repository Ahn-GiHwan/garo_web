import styled from "styled-components";

export const NavIconButton = styled.div<{ color: string; select?: boolean }>`
  display: flex;
  justify-content: center;
  border: 3px solid ${({ color }) => color};
  border-radius: 10px;
  padding: 7px 10px;
  transition: 0.1s ease-in-out;
  background-color: ${({ select }) => select && "pink"};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-color: ${({ color }) => color};
  }
  @media screen and (max-width: 450px) {
    padding: 10px 7px;
  }
`;

export const FileIcons = styled.a.attrs({
  href: "http://data.seoul.go.kr/dataList/OA-15069/F/1/datasetView.do",
  target: "_blank",
})`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.color};
  :hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;
