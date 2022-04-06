import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css'
import "leaflet/dist/leaflet.css";


function App() {
  return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[0, 0]}
            maxZoom={7}
            tms
            zoom={0}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={'../assets/{z}/{x}/{y}.png'}
          />
        </MapContainer>
  );
}

export default App;
