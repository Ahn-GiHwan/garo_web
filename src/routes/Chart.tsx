import React, { useCallback } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useQuery } from "react-query";
import { getBoroughListFetch, getCountByBoroughFetch } from "../APIs/chart";
import BarChart from "../components/Chart/BarChart";
import BoroughList from "../components/Chart/BoroughList";
import Loading from "../components/common/Loading";
import ChartLeftMenu from "../components/Chart/ChartLeftMenu";

const Container = styled.main`
  display: flex;
`;

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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

  // BarChart에 전달할 데이터를 borough를 이용하여 필터링
  const data = chartData?.filter(({ title }: { title: string }) => title === borough)[0].data;

  const onSelectBorough = useCallback((borough) => {
    setBorough(borough);
  }, []);

  if (chartDataLoading || boroughListDataLoading) return <Loading />;
  else
    return (
      <Container>
        <ChartLeftMenu />
        <ChartInfo>
          <BoroughList borough={borough} boroughs={boroughs} onSelectBorough={onSelectBorough} />
          <BarChart chartData={data} />
        </ChartInfo>
      </Container>
    );
}

export default Chart;
