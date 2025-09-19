import "./DirectionButtons.css";
export default function DirectionButtons({
  index,
  direction,
  setIndex,
  imageData,
}) {
  function handleDirectionButtonClick(dir) {
    switch (dir) {
      case "left":
        if (index > 0) {
          setIndex(index - 1);
        } else if (index <= 0) {
          setIndex(imageData.length - 1);
        }
        break;
      case "right":
        if (index < imageData.length - 1) {
          setIndex(index + 1);
        } else if (index >= imageData.length - 1) {
          setIndex(0);
        }
        break;
    }
  }
  return (
    <>
      <button
        aria-label={`button to move ${direction} 1 image (looping)`}
        className={`${direction}Button directionButton`}
        onClick={() => handleDirectionButtonClick(direction)}
      >
        {direction == "left" ? "<" : ">"}
      </button>
    </>
  );
}
