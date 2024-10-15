import store1 from "@/public/images/store-img-1.png";
import store2 from "@/public/images/store-img-2.png";
import store3 from "@/public/images/store-img-3.png";
import store4 from "@/public/images/store-img-4.png";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Next, Prev } from "../SliderBtns";
import { useState } from "react";

const RelatedProduct = () => {
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
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Prev position="top-right" />,
    nextArrow: <Next position="top-right" />,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="store border-0 related-products pt-120 pb-120">
      <div className="container border-0">
        <div className="row cus-mar align-items-stretch section-text">
          <div className="col-lg-8">
            <div className="head-content">
              <h2>Related Products</h2>
            </div>
          </div>
          <Slider
            {...settings}
            className="related-products-carousel mt-8 mt-sm-15">
            <div className="single-slide">
              <div
                onMouseMove={handleMouseMove}
                style={style}
                className="single-box box-style box-first p-3 p-sm-6 d-flex flex-row gap-4 gap-sm-6">
                <div className="icon-area">
                  <Image src={store1} alt="Image" />
                </div>
                <div className="text-area text-start">
                  <h5 className="mb-2">Forza Horizon 3</h5>
                  <p>$ 150.00 USD</p>
                  <div className="btn-area mt-4 alt-bg">
                    <Link
                      href="cart"
                      onMouseMove={handleMouseMove}
                      style={style}
                      className="box-style btn-box d-center gap-2">
                      Add to Cart
                      <i className="material-symbols-outlined mat-icon fs-five">
                        shopping_bag
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="single-box box-style box-first p-3 p-sm-6 d-flex flex-row gap-4 gap-sm-6">
                <div className="icon-area">
                  <Image src={store2} alt="Image" />
                </div>
                <div className="text-area text-start">
                  <h5 className="mb-2">CALL of DUTY</h5>
                  <p>$ 150.00 USD</p>
                  <div className="btn-area mt-4 alt-bg">
                    <Link
                      href="cart"
                      className="box-style btn-box d-center gap-2">
                      Add to Cart
                      <i className="material-symbols-outlined mat-icon fs-five">
                        shopping_bag
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="single-box box-style box-first p-3 p-sm-6 d-flex flex-row gap-4 gap-sm-6">
                <div className="icon-area">
                  <Image src={store3} alt="Image" />
                </div>
                <div className="text-area text-start">
                  <h5 className="mb-2">Stickers</h5>
                  <p>$ 150.00 USD</p>
                  <div className="btn-area mt-4 alt-bg">
                    <Link
                      href="cart"
                      className="box-style btn-box d-center gap-2">
                      Add to Cart
                      <i className="material-symbols-outlined mat-icon fs-five">
                        shopping_bag
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="single-box box-style box-first p-3 p-sm-6 d-flex flex-row gap-4 gap-sm-6">
                <div className="icon-area">
                  <Image src={store4} alt="Image" />
                </div>
                <div className="text-area text-start">
                  <h5 className="mb-2">Accessories</h5>
                  <p>$ 150.00 USD</p>
                  <div className="btn-area mt-4 alt-bg">
                    <Link
                      href="cart"
                      className="box-style btn-box d-center gap-2">
                      Add to Cart
                      <i className="material-symbols-outlined mat-icon fs-five">
                        shopping_bag
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
