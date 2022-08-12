import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => { 

  return (
    <MapContainer
      className='flex-grow-1'
      id='map' center={[38.9628, -104.7886]}
      zoom={13}
      zoomControl={false}
      onClick={ () => console.log('asdfhjasjdf')}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <ZoomControl position='topright'/>
      <div className='coords-box'>
        <span className='coords-box-lat'>00.00</span>,
        <span className='coords-box-lon'>00.00</span>
      </div>
    </MapContainer>
  )
}

export default LeafletMap;