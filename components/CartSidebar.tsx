import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type carTProps = {
  setCart: (open: boolean) => void;
};
const CartSidebar = ({ setCart }: carTProps) => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems.products.reduce(
    (acc, product) => acc + product.price * product.quantity!,
    0
  );
  const totolProducts = cartItems.products.reduce(
    (acc, product) => acc + product.quantity!,
    0
  );
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
    <div className="nav-items-wrapper d-flex flex-column p-4 p-sm-7 justify-content-between">
      <button
        className="position-absolute close-btn"
        onClick={() => setCart(false)}>
        <i className="material-symbols-outlined mat-icon fs-three">close</i>
      </button>
      <div className="nav-items">
        <h4 className="mb-7">Your shopper</h4>
        {cartItems.products.length ? (
          cartItems.products.map((item) => (
            <div key={item.id} className="single-box p-2">
              <div className="d-flex gap-2 justify-content-between align-items-start">
                <div className="content-box d-flex gap-4">
                  <div className="icon-box d-inline-flex d-center">
                    <Image src={item.img} alt="icon" />
                  </div>
                  <div className="info-box">
                    <Link href="/shop-details-1">
                      <h5>{item.name}</h5>
                    </Link>
                    <span>{item.price}</span>
                    <div className="quantity-area">
                      <div className="d-flex align-items-center">
                        <div className="qtySelector py-1 d-inline-flex align-items-center">
                          <i
                            onClick={() => dispatch(decreaseQuantity(item))}
                            className="fas fa-minus d-center decreaseQty"></i>
                          <span className="qtyValue text-center m-0 xxltxt">
                            {" "}
                            {item.quantity}
                          </span>
                          <i
                            onClick={() => dispatch(addToCart(item))}
                            className="fas fa-plus d-center increaseQty"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="end-area"
                  onClick={() => dispatch(removeFromCart(item))}>
                  <i className="material-symbols-outlined fs-six">delete</i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="single-box mt-20 text-center border-0">
            <h5>Your cart is empty</h5>
          </div>
        )}
      </div>
      <div className="footer-area">
        <div className="d-flex justify-content-between">
          <span>Products: {totolProducts} items</span>
          <span>Sub Total: ${totalPrice}</span>
        </div>
        <div className="d-center alt-bg mt-6 gap-5">
          {cartItems.products.length ? (
            <>
              <Link
                href="/cart"
                onMouseMove={handleMouseMove}
                style={style}
                onClick={() => setCart(false)}
                className="box-style btn-box second-btn d-center">
                Visit Cart
              </Link>
              <Link
                href="/checkout"
                onMouseMove={handleMouseMove}
                style={style}
                onClick={() => setCart(false)}
                className="box-style btn-box d-center active-btn">
                Check Out
              </Link>
            </>
          ) : (
            <Link
              href="/store"
              onMouseMove={handleMouseMove}
              style={style}
              onClick={() => setCart(false)}
              className="box-style btn-box second-btn d-center">
              Visit Store
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
