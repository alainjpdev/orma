import Navbar from "../components/Navbar";
import Image from "next/image";
import mainImage from '../public/images/1.jpg'


export default function Home() {
  return (
    <div className="center">
      <Image
        src={mainImage}
        alt="Picture of the author"
        width="200px" 
        height="100%"
        opacity="0.5"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h2>Home Page</h2>
    </div>
  );
}