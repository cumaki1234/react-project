import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapUbiS = ({ sucursales, selectedMarker }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Actualizar los marcadores
    const newMarkers = sucursales
      .filter((sucursal) => sucursal.id_ubicacion !== null)
      .map((sucursal) => ({
        id: sucursal.id_sucursal,
        position: [
          parseFloat(sucursal.id_ubicacion.latitud),
          parseFloat(sucursal.id_ubicacion.longitud),
        ],
        content: sucursal.sdireccion || 'Sin dirección',
      }));
    setMarkers(newMarkers);
  }, [sucursales]);

  return (
    <MapContainer center={[0, 0]} zoom={13} style={{ height: '600px', width: '127%' }}>
      <LeafletMap markers={markers} selectedMarker={selectedMarker} />
    </MapContainer>
  );
};

const LeafletMap = ({ markers, selectedMarker }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedMarker) {
      map.setView(selectedMarker, 25, { animate: true }); // Ajusta el valor de zoom según tus necesidades
    }
  }, [selectedMarker, map]);

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
      {selectedMarker && (
        <Marker position={selectedMarker}>
          <Popup>Ubicación seleccionada</Popup>
        </Marker>
      )}
    </>
  );
};

export default MapUbiS;
