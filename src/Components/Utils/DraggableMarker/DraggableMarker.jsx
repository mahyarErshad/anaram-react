import React, { useRef } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function DraggableMarker({ center }) {
  const markerRef = useRef(null);

  return (
    <>
      <Marker draggable={false} position={center} ref={markerRef}></Marker>
    </>
  );
}

export default DraggableMarker;
