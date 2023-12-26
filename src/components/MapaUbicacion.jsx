import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapUbiS = () => {
  const center = [-1.0156184261766825, -79.46708471010693]; // Coordenadas del centro del mapa

  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
        Quevedo, Avda Walter Andrade <br/> frente a la Gasolinera La Chiquita
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapUbiS;
