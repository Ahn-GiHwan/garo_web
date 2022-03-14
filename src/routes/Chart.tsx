import React, { useCallback } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getBoroughListFetch, getCountByBoroughFetch } from "../APIs/chart";
import BarChart from "../components/Chart/BarChart";
import BoroughList from "../components/Chart/BoroughList";
import Loading from "../components/common/Loading";

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
      <div>
        <BoroughList borough={borough} boroughs={boroughs} onSelectBorough={onSelectBorough} />
        <BarChart chartData={chartData} />
      </div>
    );
}

export default Chart;
