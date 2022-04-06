import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css'

function App() {
  return (
        <MapContainer
            className="leaflet-container"
            center={[0, 0]}
            maxZoom={7}
            zoom={0}>
          <TileLayer url={'../assets/{z}/{x}/{y}.png'} />
        </MapContainer>
  );
}

export default App;
