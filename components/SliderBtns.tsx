import { useState } from "react";

export const Prev = ({ onClick, position }: any) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <button
      onMouseMove={handleMouseMove}
      style={style}
      type="button"
      onClick={onClick}
      aria-label="Slide Prev"
      className={`arafat-prev slick-arrow box-style ${position}`}>
      <i className="material-symbols-outlined mat-icon" aria-hidden="true">
        arrow_right_alt
      </i>
      <span className="bg-obj"></span>
    </button>
  );
};
export const Next = ({ onClick, position }: any) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <button
      onMouseMove={handleMouseMove}
      style={style}
      onClick={onClick}
      type="button"
      aria-label="Slide Next"
      className={`arafat-next slick-arrow box-style ${position}`}>
      <i className="material-symbols-outlined mat-icon" aria-hidden="true">
        arrow_right_alt
      </i>{" "}
      <span className="bg-obj"></span>{" "}
    </button>
  );
};
