import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

export default function Cart() {
  const { changeView, closeModal } = useContext(modalContext);
  const { cart, isCartEmpty } = useContext(foodContext);
  console.log(isCartEmpty);

  //console.log("Cart");
  return (
    <>
      <h1>CART</h1>
      {isCartEmpty ? (
        <p>Cart is EMPTY</p>
      ) : (
        cart.map((item) => (
          <article key={item.id} className="flex gap-2">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.quantity}</p>
            <p>${item.price * item.quantity}</p>
          </article>
        ))
      )}
      <div className="mt-2 flex justify-end gap-2 [&_button]:rounded-md [&_button]:border [&_button]:border-black/25 [&_button]:p-2">
        <button onClick={closeModal}>Close</button>
        <button
          onClick={() => {
            changeView(<p>CHECKOUT</p>);
          }}
          className={`${isCartEmpty ? "hidden " : ""} bg-amber-300`}
        >
          Go To Checkout
        </button>
      </div>
    </>
  );
}
