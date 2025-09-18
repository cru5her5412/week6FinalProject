import "./ThumbnailBar.css";
import Thumbnail from "./Thumbnail.jsx";
export default function ThumbnailBar({ imageData, index }) {
  console.log(imageData);
  return (
    <>
      {imageData.map((image, i) => {
        <Thumbnail currIndex={i} image={image} index={index} />;
      })}
    </>
  );
}
