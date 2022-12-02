import Navbar from "../components/Navbar";
import Image from "next/image";
import mainImage from '../public/images/1.jpg'
import MapView from "../components/MapView";


export default function Home() {
  return (
    <>
    <div className="center">
      <Image
        src={mainImage}
        alt="Picture of the author"
        width="100vh" 
        height="auto"
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /> 
      {/* <h2>Home Page</h2> */}
       
      
    </div>
    {/* <MapView/> */}
    </>
  );
}