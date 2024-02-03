import { useState, useEffect } from "react";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { sanitizedTroubleTicket } from "@/types";

const heatmapOptions = {
  radius: 20,
  blur: 20,
  maxZoom: 18,
  minOpacity: 0.5,
  maxOpacity: 1,
};

export function ChangeView({ coords }: { coords: LatLngExpression }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

interface DynamicMapProps {
  tt: sanitizedTroubleTicket[];
}

export default function DynamicMap({ tt }: DynamicMapProps) {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  const center: LatLngExpression = [geoData.lat, geoData.lng];

  const heatmapData = tt.map((i) => {
    return [i.Latitude, i.longitude, 10];
  });

  return (
    <MapContainer center={center} zoom={12} style={{ height: "100vh" }}>
      <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={heatmapData}
        longitudeExtractor={(point: [number, number]) => point[1]}
        latitudeExtractor={(point: [number, number]) => point[0]}
        key={Math.random() + Math.random()}
        intensityExtractor={(point: [number, number, number]) => point[2]}
        {...heatmapOptions}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView coords={center} />
    </MapContainer>
  );
}
