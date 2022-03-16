import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HomeButton from "../components/Buttons/HomeButton";
import ChartButton from "../components/Buttons/ChartButton";
import MapButton from "../components/Buttons/MapButton";
import ListButton from "../components/Buttons/ListButton";
import ExcelButton from "../components/Buttons/ExcelButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons",
  component: HomeButton,
} as ComponentMeta<typeof HomeButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Home: ComponentStory<typeof HomeButton> = () => <HomeButton />;
export const Chart: ComponentStory<typeof ChartButton> = () => <ChartButton />;
export const Map: ComponentStory<typeof MapButton> = () => <MapButton />;
export const List: ComponentStory<typeof ListButton> = (arg) => <ListButton {...arg} />;
export const Excel: ComponentStory<typeof ExcelButton> = () => <ExcelButton />;
