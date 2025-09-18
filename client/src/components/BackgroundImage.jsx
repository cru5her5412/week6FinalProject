export default function BackgroundImage({ index, imageData }) {
  let currentImage = imageData[index]?.url;
  let currentImageAlt = imageData[index]?.alt;
  return (
    <>
      <img className="h-screen" src={currentImage} alt={currentImageAlt} />
    </>
  );
}
