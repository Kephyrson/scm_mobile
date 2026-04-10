import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

// Fix for default Leaflet marker icons in React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

// Approximate center of Taicang. We can adjust this to absolute center of the circular learning supermarket later.
const TAICANG_CAMPUS_COORD: [number, number] = [31.442, 121.103]; 

const CampusMap: React.FC = () => {
  return (
    <MapContainer 
      center={TAICANG_CAMPUS_COORD} 
      zoom={16} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={TAICANG_CAMPUS_COORD}>
        <Popup>
          <strong>西浦太仓校区 (待精确定位)</strong><br />
          Circular Learning Supermarket
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CampusMap;
