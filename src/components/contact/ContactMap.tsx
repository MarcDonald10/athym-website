import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

// Import the custom marker image (adjust the path as needed)
import markerIconImage from '../../assets/marqueur/lieu.png';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
};

const locations = [
  {
    name: 'Grenoble, France',
    position: { lat: 45.18150370861031, lng: 5.716129253044657 },
  },
  {
    name: 'Dakar, Senegal',
    position: { lat: 14.692785, lng: -17.446627 },
  },
];

// Initial center of the map (average of the two locations)
const initialCenter = {
  lat: (locations[0].position.lat + locations[1].position.lat) / 2,
  lng: (locations[0].position.lng + locations[1].position.lng) / 2,
};

const ContactMap: React.FC = () => {
  // Securely access the API key from environment variables
  const apiKey = "AIzaSyBYNu1iWbxlkTCf87GlV2xYjkcbv5I0vzI" || '';

  // State to control map center and zoom
  const [mapConfig, setMapConfig] = useState({
    center: initialCenter,
    zoom: 4,
  });

  // Define the custom marker icon
  const markerIcon = {
    url: markerIconImage, // Use the imported image
    // scaledSize: typeof window !== 'undefined' ? new window.google.maps.Size(60, 60) : undefined, // Larger size (60x60 pixels)
    // anchor: typeof window !== 'undefined' ? new window.google.maps.Point(30, 60) : undefined, // Anchor at bottom center
  };

  // Function to handle click on location link
  const handleLocationClick = (position: { lat: number; lng: number }) => {
    setMapConfig({
      center: position,
      zoom: 10, // Zoom in to focus on the selected location
    });
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-neutral-900 mb-6">Nous trouver</h3>
      <div className="bg-neutral-100 rounded-xl p-8 text-center">
        <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
        <p className="text-lg text-neutral-700 mb-4">Athyms Solutions</p>
        <p className="text-neutral-600 mb-6">
          Basés à Grenoble et Dakar, au cœur des écosystèmes d'innovation
        </p>
        {apiKey ? (
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapConfig.center}
              zoom={mapConfig.zoom}
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  title={location.name}
                  icon={markerIcon} // Use the custom marker icon
                />
              ))}
            </GoogleMap>
          </LoadScript>
        ) : (
          <p className="text-red-600">
            Erreur : Clé API Google Maps manquante.
          </p>
        )}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => handleLocationClick(locations[0].position)}
            className="btn-primary inline-flex items-center"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Grenoble, France
          </button>
          <button
            onClick={() => handleLocationClick(locations[1].position)}
            className="btn-primary inline-flex items-center"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Dakar, Sénégal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;