import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getBoroughListFetch } from "../APIs/map";
import Loading from "../components/common/Loading";
import LeftMenu from "../components/Map/LeftMenu";
import ThemeToggleButton from "../components/ThemeToggleButton";
import NaverMap from "../components/Map/NaverMap";

const Container = styled.main`
  display: flex;
`;

function Map() {
  const { isLoading, data } = useQuery("getBoroughList", getBoroughListFetch);
  function getLocation() {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(position.coords.latitude + " " + position.coords.longitude);
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }
  getLocation();

  if (isLoading) return <Loading />;
  else
    return (
      <Container>
        <LeftMenu data={data} />
        <NaverMap />
        <ThemeToggleButton />
      </Container>
    );
}

export default React.memo(Map);
