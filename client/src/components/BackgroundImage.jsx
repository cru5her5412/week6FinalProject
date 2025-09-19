export default function BackgroundImage({ index, imageData }) {
  let currentImage = imageData[index]?.url;
  let currentImageAlt = imageData[index]?.alt;
  return (
    <div className="w-screen flex justify-center">
      <img className="h-screen" src={currentImage} alt={currentImageAlt} />
    </div>
  );
}
