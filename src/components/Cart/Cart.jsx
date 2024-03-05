import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

import CartCheckout from "./CartCheckout";

export default function Cart() {
  const { changeView, closeModal } = useContext(modalContext);
  const { cart, isCartEmpty, increaseItemQuantity, decreaseItemQuantity } =
    useContext(foodContext);

  //console.log("Cart");
  return (
    <>
      <h1>CART</h1>
      {isCartEmpty ? (
        <p>Cart is EMPTY</p>
      ) : (
        cart.map((item) => (
          <article key={item.id} className="flex items-center justify-between">
            <div className="flex gap-2">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.quantity}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  decreaseItemQuantity(item);
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/35 bg-yellow-950 text-white"
              >
                -
              </button>
              <p>${item.price * item.quantity}</p>
              <button
                onClick={() => increaseItemQuantity(item)}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/35 bg-yellow-950 text-white"
              >
                +
              </button>
            </div>
          </article>
        ))
      )}
      <div className="mt-2 flex justify-end gap-2 [&_button]:rounded-md [&_button]:border [&_button]:border-black/25 [&_button]:p-2">
        <button onClick={closeModal}>Close</button>
        <button
          onClick={() => {
            changeView(<CartCheckout />);
          }}
          className={`${isCartEmpty ? "hidden " : ""} bg-amber-300`}
        >
          Go To Checkout
        </button>
      </div>
    </>
  );
}
