// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const locations = [
  { id: 1, name: 'Ubicación 1', lat: 40.7128, lng: -74.0060 },
  { id: 2, name: 'Ubicación 2', lat: 34.0522, lng: -118.2437 },
  // Agrega más ubicaciones según sea necesario
];

const MapComponent = () => {
  const center = [locations[0].lat, locations[0].lng];

  const handleLocationClick = (lat, lng) => {
    // Puedes implementar la lógica para centrar el mapa en la ubicación deseada aquí
    console.log(`Ir a la ubicación: ${lat}, ${lng}`);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        {locations.map(location => (
          <div key={location.id} className="mb-4 bg-gray-200 p-4">
            <h3 className="text-lg font-bold mb-2">{location.name}</h3>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleLocationClick(location.lat, location.lng)}
            >
              Ir a la ubicación
            </button>
          </div>
        ))}
      </div>
      <div className="w-2/3">
        <MapContainer center={center} zoom={5} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map(location => (
            <Marker key={location.id} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
