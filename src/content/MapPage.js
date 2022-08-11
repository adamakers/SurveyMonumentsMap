import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import MapSidebar from './MapSidebar';
import 'leaflet/dist/leaflet.css'


const MapPage = () => {
  return (
    <Row className='map-page-content g-0'>
      <Col xs='8' style={{padding: 0}}>
        <MapContainer id="map" center={[38.9628, -104.7886]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
      </Col>
      <Col xs='4' style={{padding: 0}}>
        <MapSidebar />
      </Col>
    </Row>
  );
}

export default MapPage;