// src/components/MyMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useIpData } from '@/context/IpDataContext';
import UpdateMapView from './UpdateMapView'
import { ZoomControl } from 'react-leaflet';

const MyMap = () => {
  const {ipData} = useIpData();

  if (!ipData) {
    return null; // or a loading state
  }
  const position: [number, number] = [ipData.location.lat, ipData.location.lng];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      zoomControl={false}
      className='z-10'
      style={{ height: '50vh', width: '100%' }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <strong>IP:</strong> {ipData.ip}<br />
          <strong>Location:</strong> {ipData.location.city}, {ipData.location.country}
        </Popup>
      </Marker>

      <UpdateMapView lat={ipData.location.lat} lng={ipData.location.lng} />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MyMap;
