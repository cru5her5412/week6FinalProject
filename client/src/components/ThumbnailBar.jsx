import "./ThumbnailBar.css";
import Thumbnail from "./Thumbnail.jsx";
export default function ThumbnailBar({ imageData, index, handleImageClick }) {
  return (
    <div id="thumbnailBar">
      {imageData.map((image, i) => (
        <Thumbnail
          key={`ImageNo${i}`}
          currActiveIndex={index}
          image={image}
          index={i}
          handleImageClick={handleImageClick}
        />
      ))}
    </div>
  );
}
