export default function Thumbnail({
  image,
  index,
  currActiveIndex,
  handleImageClick,
}) {
  return (
    <>
      {index == currActiveIndex ? (
        <button className="imageButton" onClick={() => handleImageClick(index)}>
          <img
            className="currentImage thumbnailImg"
            src={image?.url}
            alt={image?.alt}
          />
        </button>
      ) : (
        <button className="imageButton" onClick={() => handleImageClick(index)}>
          <img className="thumbnailImg" src={image?.url} alt={image?.alt} />
        </button>
      )}
    </>
  );
}
