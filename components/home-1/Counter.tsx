import React, { useState } from "react";
import CounterElement from "../Counter";

const Counter = () => {
  const [active, setActive] = useState(2);
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
    <div className="counter-section pt-120">
      <div className="container">
        <div className="row cus-mar">
          <div className="col-sm-6 col-xl-3">
            <div
              onMouseOver={() => setActive(1)}
              onMouseMove={handleMouseMove}
              style={style}
              className={`single-box py-6 box-style box-first d-center position-relative ${
                active == 1 && "active-area"
              }`}>
              <div className="counters d-flex align-items-center">
                <CounterElement end={652} className="display-one" />
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-five position-absolute">
                Unique Daily Users.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div
              onMouseOver={() => setActive(2)}
              onMouseMove={handleMouseMove}
              style={style}
              className={`single-box py-6 box-style box-first d-center position-relative ${
                active == 2 && "active-area"
              }`}>
              <div className="counters d-flex align-items-center">
                <CounterElement end={50} className="display-one" />
                <span className="display-one">M</span>
              </div>
              <p className="name-area fs-five position-absolute">Downloads</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div
              onMouseOver={() => setActive(3)}
              onMouseMove={handleMouseMove}
              style={style}
              className={`single-box py-6 box-style box-first d-center position-relative ${
                active == 3 && "active-area"
              }`}>
              <div className="counters d-flex align-items-center">
                <CounterElement end={200} className="display-one" />
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-five position-absolute">
                Games Launched
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div
              onMouseOver={() => setActive(4)}
              onMouseMove={handleMouseMove}
              style={style}
              className={`single-box py-6 box-style box-first d-center position-relative ${
                active == 4 && "active-area"
              }`}>
              <div className="counters d-flex align-items-center">
                <CounterElement end={350} className="display-one" />
                <span className="display-one">k</span>
              </div>
              <p className="name-area fs-five position-absolute">
                Gaming Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
