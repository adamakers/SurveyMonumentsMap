import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const MapPage = () => {
  return (
    <MapContainer id="map" center={[38.9628, -104.7886]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </MapContainer>
  );
}

export default MapPage;