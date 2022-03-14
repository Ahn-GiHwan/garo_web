import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: "100%";
`;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type ChartData = {
  label: string;
  value: number;
};

const BarChart = ({ chartData }: { chartData: ChartData[] }) => {
  const labels = chartData.map(({ label }) => label);
  const num = chartData.map(({ value }) => value);

  const data = {
    labels,
    datasets: [
      {
        data: num,
      },
    ],
  };

  return (
    <ChartBox>
      <Bar
        data={data}
        // options={{
        //   responsive: true,
        //   plugins: {
        //     legend: {
        //       labels: {
        //         boxWidth: 10,
        //         boxHeight: 10,
        //         usePointStyle: true,
        //         pointStyle: "rectRounded",
        //       },
        //     },
        //   },
        // }
        // }
      />
    </ChartBox>
  );
};

BarChart.propTypes = {
  chartData: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    }),
  }),
};

BarChart.defaultProps = {
  chartData: [
    {
      title: "전체",
      data: [
        {
          label: "강남구",
          value: 976,
        },
        {
          label: "강동구",
          value: 76,
        },
      ],
    },
    {
      title: "강남구",
      data: [
        {
          label: "강남대로",
          value: 42,
        },
        {
          label: "개원길",
          value: 4,
        },
      ],
    },
    {
      title: "강동구",
      data: [
        {
          label: "강동대로",
          value: 1,
        },
        {
          label: "고덕로",
          value: 7,
        },
      ],
    },
  ],
};

export default BarChart;
