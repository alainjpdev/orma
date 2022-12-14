import Navbar from "../components/Navbar";
import "../styles/globals.css";
// import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapView from "../components/MapView";

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJrMjc4NCIsImEiOiJjbGE5bzJrMWYwMDlmM29ybzVrZjRsZ3B6In0.oei-xYZayuQ2pZniotD0ow';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css" rel="stylesheet"></link>
      <Navbar />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;