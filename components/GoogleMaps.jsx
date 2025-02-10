"use client";

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%", // Set your desired height
};

const center = {
  lat: 37.7749, // Example latitude
  lng: -122.4194, // Example longitude
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA387xOrNCu1Pv2g-u48dgyK9DpdaIg5fw', // Use your API key here
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
