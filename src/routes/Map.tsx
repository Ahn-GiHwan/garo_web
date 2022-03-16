import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getBoroughListFetch, getBoroughsGeocodeFetch } from "../APIs/map";
import Loading from "../components/common/Loading";
import MapLeftMenu from "../components/Map/MapLeftMenu";
import NaverMap from "../components/Map/NaverMap";

const Container = styled.main`
  display: flex;
`;

function Map() {
  const [selectBorough, setSelectBorough] = useState("노원구");
  const [marker, setMarker] = useState({ latitude: 37.3595704, longitude: 127.105399 });
  const { isLoading, data } = useQuery("getBoroughList", getBoroughListFetch);

  const onClickBorough = useCallback((borough: string) => {
    setSelectBorough(borough);
  }, []);

  useEffect(() => {
    async function getBoroughLoc() {
      const data = await getBoroughsGeocodeFetch(selectBorough);
      setMarker(data);
    }
    getBoroughLoc();
  }, [selectBorough]);

  if (isLoading) return <Loading />;
  else
    return (
      <Container>
        <MapLeftMenu data={data} onClickBorough={onClickBorough} />
        <NaverMap lat={marker.latitude} lng={marker.longitude} />
      </Container>
    );
}

export default React.memo(Map);
