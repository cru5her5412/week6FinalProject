import { useState, useEffect } from "react";
import DirectionButtons from "./components/DirectionButtons";
import ThumbnailBar from "./components/ThumbnailBar";
import BackgroundImage from "./components/BackgroundImage";
import "./App.css";
export default function App() {
  const [imageData, setImageData] = useState([]);
  const [index, setIndex] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("dogs");
  useEffect(() => {
    async function getImagesFromAPI() {
      let response = await fetch(import.meta.env.VITE_API_URL);
      let parsedData = await response.json();
      setImageData(parsedData);
      console.log(parsedData);
    }
    getImagesFromAPI();
  }, []);
  function handleImageClick(newIndex) {
    setIndex(newIndex);
    console.log(newIndex);
  }
  return (
    <>
      <BackgroundImage index={index} imageData={imageData} />
      <ThumbnailBar
        index={index}
        imageData={imageData}
        handleImageClick={handleImageClick}
      />
      <DirectionButtons
        direction="right"
        index={index}
        setIndex={setIndex}
        imageData={imageData}
      />
      <DirectionButtons
        direction="left"
        index={index}
        setIndex={setIndex}
        imageData={imageData}
      />
      {/* <input
        className="searchBar"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setImageData([]);
        }}
        type="text"
      /> 
      Set up search bar before deciding to try and make my own api
      */}
    </>
  );
}
