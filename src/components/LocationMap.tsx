"use client";

import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface LocationMapProps {
  initialOptions?: Omit<mapboxgl.MapOptions, "container">;
  onMapLoaded?(map: mapboxgl.Map): void;
  onMapRemoved?(): void;
  latitude: number;
  longitude: number;
}

export default function LocationMap({
  initialOptions = {},
  onMapLoaded,
  latitude,
  longitude,
}: LocationMapProps) {
  const mapNode = React.useRef<HTMLDivElement | null>(null);
  const mapInstance = React.useRef<mapboxgl.Map | null>(null); // Ensure the map initializes only once

  React.useEffect(() => {
    const node = mapNode.current;
    if (!node || typeof window === "undefined") return;

    if (mapInstance.current) return; // Prevent multiple map initializations

    // Initialize Mapbox instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude], // Use the provided latitude and longitude
      zoom: 15,
      scrollZoom: false,
      collectResourceTiming: false, // Prevent telemetry requests
      ...initialOptions,
    });

    // Save the map instance
    mapInstance.current = mapboxMap;

    // Add a marker
    const marker = new mapboxgl.Marker();
    marker.setLngLat([longitude, latitude]);
    marker.addTo(mapboxMap);

    // Call onMapLoaded if provided
    if (onMapLoaded) mapboxMap.once("load", () => onMapLoaded(mapboxMap));

    // Cleanup on component unmount
    return () => {
      mapboxMap.remove();
      mapInstance.current = null; // Reset map reference
    };
  }, [initialOptions, onMapLoaded, latitude, longitude]);

  React.useEffect(() => {
    // Add custom zoom controls with keydown events
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mapInstance.current) return;

      if (event.altKey && event.key === "ArrowUp") {
        mapInstance.current.zoomIn();
      } else if (event.altKey && event.key === "ArrowDown") {
        mapInstance.current.zoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div ref={mapNode} className="h-full" />;
}
