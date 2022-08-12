import LeafletMap from './LeafletMap';
import MapSidebar from './MapSidebar';

const MapPage = () => {
  return (
    <div className='d-flex flex-column flex-md-row'>
      <LeafletMap
        // onMouseMove={(e) => throttle(() => {coordsHandler(e)}, 100)}
      />
      <MapSidebar />
    </div>
  );
}

export default MapPage;