export default function Thumbnail({ image, index, currIndex }) {
  console.log(image);
  return (
    <>
      {index == currIndex ? (
        <img className="currentImage" src={image?.url} alt={image?.alt} />
      ) : (
        <img src={image?.url} alt={image?.alt} />
      )}
    </>
  );
}
