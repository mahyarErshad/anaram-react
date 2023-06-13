import React, { useCallback, useMemo, useRef, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function DraggableMarker({ position, setPosition }) {
  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }), // eslint-disable-next-line
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <>
      <Marker draggable={draggable} eventHandlers={eventHandlers} position={position} ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>{draggable ? "قابلیت حرکت نشانگر فعال شد" : "برای حرکت نشانگر کلیک کنید"}</span>
        </Popup>
      </Marker>
    </>
  );
}

export default DraggableMarker;
