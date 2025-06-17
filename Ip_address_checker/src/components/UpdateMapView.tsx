import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface RecenterMapProps {
  lat: number;
  lng: number;
}

const UpdateMapView = ({ lat, lng }: RecenterMapProps) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom(), {
      animate: true,
    });
  }, [lat, lng, map]);

  return null;
};

export default UpdateMapView;
