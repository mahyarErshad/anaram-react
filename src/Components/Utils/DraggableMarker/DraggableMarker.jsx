import React, { useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function DraggableMarker({ position }) {
  const markerRef = useRef(null);

  return (
    <>
      <Marker draggable={false} position={position} ref={markerRef}>
        <Popup minWidth={90}>
          <span>برای مسیریابی روی آدرس کلیک کنید</span>
        </Popup>
      </Marker>
    </>
  );
}

export default DraggableMarker;
