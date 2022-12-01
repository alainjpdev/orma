
import React, { useState, useRef } from "react";
// import useSwr from "swr";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
// import useSupercluster from "use-supercluster";
export default function MapView() {
// const mapRef = useRef<ReactMapGL | null>(null)
const [viewport, setViewport] = useState({
    latitude: 52.6376,
    longitude: -1.135171,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });
  const mapRef = useRef();
   
  return (
      <ReactMapGL {...viewport} 
      maxZoom={12}
       mapboxAccessToken={"pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"}
       >map
        </ReactMapGL>

  )
  
}
