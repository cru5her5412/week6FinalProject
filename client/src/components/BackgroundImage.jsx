export default function BackgroundImage({ index, imageData }) {
  let currentImage = imageData[index]?.urls?.raw;
  let currentImageAlt = imageData[index]?.alts?.raw;
  return (
    <div className="w-screen flex justify-center">
      <img className="h-screen" src={currentImage} alt={currentImageAlt} />
    </div>
  );
}
