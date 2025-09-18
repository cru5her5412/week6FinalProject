import { useState, useEffect } from "react";
import DirectionButtons from "./components/DirectionButtons";
import ThumbnailBar from "./components/ThumbnailBar";
import BackgroundImage from "./components/BackgroundImage";
import "./App.css";
export default function App() {
  const [imageData, setImageData] = useState([]);
  const [index, setIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("dogs");
  useEffect(() => {
    async function getImagesFromAPI() {
      let response = await fetch(
        import.meta.env.VITE_API_URL + `&query=${searchQuery}` + `page=1`
      );
      let parsedData = await response.json();
      setImageData(parsedData);
    }
    getImagesFromAPI();
    console.log("running");
  }, [searchQuery]);
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
      {/* <DirectionButtons direction="right" index={index} imageData={imageData} />
      <DirectionButtons direction="left" index={index} imageData={imageData} /> */}
      <input
        className="searchBar"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setImageData([]);
        }}
        type="text"
      />
    </>
  );
}
