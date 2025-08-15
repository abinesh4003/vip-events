'use client'

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

const Map = ({ latitude, longitude, zoom, markerText }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  )

  return (
    <GoogleMap
      zoom={zoom || 15}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="w-full h-full"
      options={{
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      }}
    >
      <Marker 
        position={{ lat: latitude, lng: longitude }}
        title={markerText}
      />
    </GoogleMap>
  )
}

export default Map