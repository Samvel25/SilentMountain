import gameCard1 from "@/public/images/game-card-1.png";
import gameCard2 from "@/public/images/game-card-2.png";
import gameCard3 from "@/public/images/game-card-3.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedGames = () => {
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
    <section className="features-games position-relative pt-120 pb-120">
      <div className="container position-relative cus-z1">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="section-text">
              <h4 className="sub-title">Features Games</h4>
              <p>
                Gaming Studio Specializes in Developing Games with Unique
                Features. Explore our Feature game.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <Link
              onMouseMove={handleMouseMove}
              style={style}
              href="/game"
              className="box-style d-center px-3 gap-3 m-auto">
              View All Project
              <i className="material-symbols-outlined"> call_made </i>
            </Link>
          </div>
        </div>
        <div className="row cus-mar">
          <div className="col-lg-7">
            <div className="single-box position-relative">
              <Image className="w-100" src={gameCard1} alt="image" />
              <div className="btn-area position-absolute alt-bg">
                <Link
                  href="/"
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box d-center">
                  Play Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="single-box position-relative">
              <Image className="w-100" src={gameCard2} alt="image" />
              <div className="btn-area position-absolute alt-bg">
                <Link
                  href="/"
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box d-center">
                  Play Now
                </Link>
              </div>
            </div>
            <div className="single-box position-relative">
              <Image className="w-100" src={gameCard3} alt="image" />
              <div className="btn-area position-absolute alt-bg">
                <Link
                  href="/"
                  onMouseMove={handleMouseMove}
                  style={style}
                  className="box-style btn-box d-center">
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-area text-center mt-10 alt-bg">
          <Link
            href="game"
            onMouseMove={handleMouseMove}
            style={style}
            className="box-style btn-box d-center">
            Explore Our Games
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
