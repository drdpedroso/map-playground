import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css'



function App() {
  return (
        <MapContainer
            center={[0, 0]}
            maxZoom={7}
            style={{ width: '100%', height: '100%' }}
            zoom={0}
            minZoom={0}
        >
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={'../assets/{z}/{x}/{y}.png'}
          />
        </MapContainer>
  );
}

export default App;
