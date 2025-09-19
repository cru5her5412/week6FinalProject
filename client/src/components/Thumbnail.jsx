export default function Thumbnail({
  image,
  index,
  currActiveIndex,
  handleImageClick,
}) {
  return (
    <>
      {index == currActiveIndex ? (
        <img
          className="currentImage thumbnailImg"
          src={image?.url}
          alt={image?.alt}
          onClick={() => handleImageClick(index)}
        />
      ) : (
        <img
          className="thumbnailImg"
          src={image?.url}
          alt={image?.alt}
          onClick={() => handleImageClick(index)}
        />
      )}
    </>
  );
}
