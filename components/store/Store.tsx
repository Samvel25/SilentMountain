import { storeItems } from "@/public/data/storedata";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IProduct, addToCart } from "@/redux/productSlice";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Store = () => {
  const [active, setActive] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const dispatch = useAppDispatch();
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  const handleAddToCart = (item: IProduct) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} Added To Cart!`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  return (
    <section className="store overflow-hidden pt-120 pb-120">
      <div className="container singletab">
        <div className="row section-header justify-content-center">
          <div className="col-lg-6 text-center">
            <span className="display-four heading mb-6">Store</span>
            <ul className="nav tablinks gap-4 flex-wrap justify-content-center tab-area">
              {storeItems.map(({ id, name }) => (
                <li key={id} className="nav-item" onClick={() => setActive(id)}>
                  <button
                    className={`nav-link d-center ${active == id && "active"}`}>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tab-content tabcontents">
          {storeItems.map(({ id, items }) => (
            <div key={id} className={`tabitem ${active == id && "active"}`}>
              <div className="row cus-mar">
                {items.map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                    <div
                      onMouseMove={handleMouseMove}
                      style={style}
                      className="single-box box-style box-first p-3 p-sm-6 d-flex flex-row gap-6">
                      <div className="icon-area">
                        <Image src={item.img} alt="Image" />
                      </div>
                      <div className="text-area text-start">
                        <h5 className="mb-2">{item.name}</h5>
                        <p>$ {item.price.toFixed(2)} USD</p>
                        <div className="btn-area mt-4 alt-bg">
                          <button
                            onMouseMove={handleMouseMove}
                            style={style}
                            onClick={() => handleAddToCart(item)}
                            className="box-style btn-box d-center gap-2">
                            Add to Cart
                            <i className="material-symbols-outlined mat-icon fs-five">
                              shopping_bag
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Store;
