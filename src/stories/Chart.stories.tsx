import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BarChart from "../components/Chart/BarChart";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Chart",
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Home: ComponentStory<typeof BarChart> = () => <BarChart />;
