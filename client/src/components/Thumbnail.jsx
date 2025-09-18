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
          src={image?.urls?.raw}
          alt={image?.slug}
          onClick={() => handleImageClick(index)}
        />
      ) : (
        <img
          className="thumbnailImg"
          src={image?.urls?.raw}
          alt={image?.slug}
          onClick={() => handleImageClick(index)}
        />
      )}
    </>
  );
}
