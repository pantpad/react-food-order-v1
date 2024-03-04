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
      <button
        onClick={() => {
          if (isCartEmpty) {
            closeModal();
          } else {
            changeView(<p>CHECKOUT</p>);
          }
        }}
      >
        {isCartEmpty ? "Close" : "Go To Checkout"}
      </button>
    </>
  );
}
