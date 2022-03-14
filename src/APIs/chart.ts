import axios from "axios";

const URL = "https://garomapserver.herokuapp.com/chart";

export const getBoroughListFetch = async () => {
  const { data } = await axios.get(`${URL}/boroughs`);
  return data;
};

export const getCountByBoroughFetch = async () => {
  const { data } = await axios.get(`${URL}/borough/loadNames/count`);
  return data;
};
