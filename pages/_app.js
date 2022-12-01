import Navbar from "../components/Navbar";
import "../styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapView from "../components/MapView";

mapboxgl.accessToken = 'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;