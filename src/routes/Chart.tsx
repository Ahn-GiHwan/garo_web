import React, { useCallback } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useQuery } from "react-query";
import { getBoroughListFetch, getCountByBoroughFetch } from "../APIs/chart";
import BarChart from "../components/Chart/BarChart";
import BoroughList from "../components/Chart/BoroughList";
import Loading from "../components/common/Loading";
import LeftMenu from "../components/Map/LeftMenu";

const Container = styled.main`
  display: flex;
`;

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function Chart() {
  const { isLoading: boroughListDataLoading, data: boroughs } = useQuery(
    "getBoroughListChart",
    getBoroughListFetch
  );
  const { isLoading: chartDataLoading, data: chartData } = useQuery(
    "getCountByBorough",
    getCountByBoroughFetch
  );

  const [borough, setBorough] = useState("전체");

  const onSelectBorough = useCallback((borough) => {
    setBorough(borough);
  }, []);

  if (chartDataLoading || boroughListDataLoading) return <Loading />;
  else
    return (
      <Container>
        <LeftMenu />
        <ChartInfo>
          <BoroughList borough={borough} boroughs={boroughs} onSelectBorough={onSelectBorough} />
          <BarChart chartData={chartData} />
        </ChartInfo>
      </Container>
    );
}

export default Chart;
