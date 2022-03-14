import React from "react";
const { NaverMap: Map, Marker } = require("react-naver-maps");

function NaverMap() {
  return (
    <Map
      style={{
        width: "100%",
        height: "100vh",
      }}
      defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
      defaultZoom={10}
    />
  );
}

export default NaverMap;
