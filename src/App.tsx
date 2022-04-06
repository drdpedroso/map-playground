import React, {useEffect, useRef} from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './App.css'

import {CRS, Point, TileLayer as TileLayerL, Transformation} from 'leaflet';

var mapExtent = [0.00000000, -724.00000000, 1280.00000000, 0.00000000];
var mapMinZoom = 0;
var mapMaxZoom = 7;
var mapMaxResolution = 1.00000000;
var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
var tileExtent = [0.00000000, -724.00000000, 1280.00000000, 0.00000000];
var crs = CRS.Simple;
//@ts-ignore
crs.transformation = new Transformation(1, -tileExtent[0], -1, tileExtent[3]);
crs.scale = function(zoom) {
    return Math.pow(2, zoom) / mapMinResolution;
};
crs.zoom = function(scale) {
    return Math.log(scale * mapMinResolution) / Math.LN2;
};

function TileLayerC() {
    const map = useMap();

    useEffect(() => {
        new TileLayerL(
            `../map2/{z}/{x}/{y}.png`,
            {
                tileSize: 32,
                zoomOffset: 0
            }
        ).addTo(map);
    }, []);

    return null;
}

function App() {
    const mapRef = useRef(null)

  return (
        <MapContainer
            ref={mapRef}
            center={[0, 0]}
            maxZoom={5}
            zoom={0}
            minZoom={0}
            crs={crs}
            noWrap
            tms={false}
        >
          <TileLayerC
          />
        </MapContainer>
  );
}

export default App;
