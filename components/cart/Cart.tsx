"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrimaryBtn from "../PrimaryBtn";
const Cart = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity!,
    0
  );
  const totolProducts = products.reduce(
    (acc, product) => acc + product.quantity!,
    0
  );
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <div className="shop-details cart-details">
      <div className="container border-0 pt-120 pb-120">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-8">
            <div className="head-area">
              <h2 className="visible-slowly-bottom mb-7">Shopping Cart</h2>
            </div>
            <div className="shopping-cart nav-items-wrapper d-grid gap-3 py-5 mb-6">
              {products.length ? (
                products.map((item) => (
                  <div
                    key={item.id}
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="single-box box-style box-first m-0 p-3 p-sm-6">
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="content-box d-flex gap-3 gap-sm-4">
                        <div className="icon-box d-inline-flex d-center">
                          <Image src={item.img} className="max-un" alt="icon" />
                        </div>
                        <div className="info-box d-flex w-100 flex-column justify-content-between">
                          <div className="top-area">
                            <Link href="/shop-details-1">
                              <h5>{item.name}</h5>
                            </Link>
                            <div className="price-area border-0 mt-2 d-flex gap-2 align-items-center">
                              <span className="fs-six cur-price">
                                ${item.price.toFixed(2)}
                              </span>
                              <span className="fs-seven">
                                <del>${(item.price + 150).toFixed(2)}</del>
                              </span>
                            </div>
                          </div>
                          <div className="quantity-area">
                            <div className="d-flex align-items-center">
                              <div className="qtySelector my-1 d-inline-flex align-items-center px-2">
                                <i
                                  onClick={() =>
                                    dispatch(decreaseQuantity(item))
                                  }
                                  className="fas fa-minus d-center decreaseQty"></i>
                                <span className="p-2">{item.quantity}</span>
                                <i
                                  onClick={() => dispatch(addToCart(item))}
                                  className="fas fa-plus d-center increaseQty"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-area d-flex flex-column align-items-end justify-content-between">
                        <button
                          onClick={() => dispatch(removeFromCart(item))}
                          type="button"
                          className="end-area">
                          <i className="material-symbols-outlined fs-six">
                            delete
                          </i>
                        </button>
                        <span className="fs-seven">
                          ${(item.price * item.quantity!).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h5 className="text-center my-16">Your Cart Is Empty</h5>
              )}
            </div>
            <Link
              href="/store"
              className="d-flex align-items-center fs-seven gap-1">
              <i className="material-symbols-outlined"> chevron_left </i>
              Continue Shopping
            </Link>
          </div>
          <div className="col-xl-4 col-md-8 mt-7 mt-xl-0">
            <form className="checkout-form py-5 px-3">
              <h2 className="visible-slowly-bottom mb-4 text-center">
                Check out
              </h2>
              <div className="main-content py-4 py-sm-8 px-3 px-sm-5">
                <ul>
                  <li className="d-center justify-content-between gap-2 fs-seven">
                    <span>{totolProducts} items</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </li>
                  <li className="d-center justify-content-between gap-2 fs-seven">
                    <span>Shipping</span>
                    <span>Free</span>
                  </li>
                </ul>
                <div className="promo-code my-6">
                  <div className="head-area">
                    <p>Have a promo code?</p>
                  </div>
                  <div className="input-area p-1 d-flex align-items-center justify-content-between">
                    <input
                      type="text"
                      className="ps-2"
                      placeholder="Promo Code"
                    />
                    <div className="btn-area">
                      <PrimaryBtn text="Add" />
                    </div>
                  </div>
                </div>
                <ul className="sub-total py-3">
                  <li className="d-center justify-content-between gap-2 fs-seven">
                    <span>Total (tax incl.)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
              <div className="btn-area text-center mt-6">
                {products.length ? (
                  <PrimaryBtn text="Proceed to Checkout" href="checkout" />
                ) : (
                  <Link
                    href="/store"
                    onMouseMove={handleMouseMove}
                    style={style}
                    className="box-style btn-box second-btn d-center">
                    Visite Store
                  </Link>
                )}
              </div>
            </form>
            <div className="footer-items mt-5 mt-sm-10 d-grid gap-3">
              <p className="d-flex align-items-center gap-3">
                <i className="material-symbols-outlined"> shield </i>
                Secure payment
              </p>
              <p className="d-flex align-items-center gap-3">
                <i className="material-symbols-outlined"> local_shipping </i>
                Instant delivery
              </p>
              <p className="d-flex align-items-center gap-3">
                <i className="material-symbols-outlined"> cached </i>
                30-day money back guarantee for unused keys
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
