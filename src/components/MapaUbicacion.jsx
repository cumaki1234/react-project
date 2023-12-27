import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import burguer from '../assets/images/burguer.png';


const MapUbiS = () => {
  
  const center = [51.505, -0.09]; // Latitud y longitud del centro del mapa

  const markers = [
    { id: 1, position: [51.505, -0.09], content: 'Marcador 1' },
    { id: 2, position: [51.51, -0.1], content: 'Marcador 2' },
    { id: 3, position: [51.515, -0.11], content: 'Marcador 3' },
  ];

 


  return (
    <MapContainer center={center} zoom={13} style={{ height: '600px', width: '127%' }}
>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
    </MapContainer>
    );
  };
  
  

  

export default MapUbiS;
