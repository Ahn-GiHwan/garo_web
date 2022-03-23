import React from "react";
const { NaverMap: Map, Marker } = require("react-naver-maps");

type MarkerLoc = {
  lat: number;
  lng: number;
};

function NaverMap({ lat, lng }: MarkerLoc) {
  const navermaps = window.naver.maps;

  return (
    <Map
      style={{
        width: "100%",
        height: "100vh",
      }}
      defaultCenter={{ lat, lng }}
      defaultZoom={15}
      center={{ lat, lng }}
    >
      <Marker position={new navermaps.LatLng(lat, lng)} animation={0} title="현재 위치" />
    </Map>
  );
}

export default React.memo(NaverMap);
