import { useState, useEffect } from "react";
import DirectionButtons from "./components/DirectionButtons";
import ThumbnailBar from "./components/ThumbnailBar";
import BackgroundImage from "./components/BackgroundImage";
import "./App.css";
export default function App() {
  const [imageData, setImageData] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    async function getImagesFromAPI() {
      let response = await fetch(import.meta.env.VITE_API_URL);
      let parsedData = await response.json();
      setImageData(parsedData);
    }
    getImagesFromAPI();
  }, []);
  return (
    <>
      <BackgroundImage index={index} imageData={imageData} />
      <ThumbnailBar index={index} imageData={imageData} />
      {/* <DirectionButtons direction="right" index={index} imageData={imageData} />
      <DirectionButtons direction="left" index={index} imageData={imageData} /> */}
    </>
  );
}
