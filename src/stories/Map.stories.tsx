import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NaverMap from "../components/Map/NaverMap";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Map",
  component: NaverMap,
} as ComponentMeta<typeof NaverMap>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Home: ComponentStory<typeof NaverMap> = (arg) => <NaverMap {...arg} />;
