import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

export default function CartHistory() {
  const { closeModal } = useContext(modalContext);
  const { cart, isCartEmpty } = useContext(foodContext);
  //console.log("CartHistory");
  return (
    <>
      <h1>History</h1>
      {isCartEmpty ? (
        <p>No HISTORY</p>
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
            closeModal();
          }
        }}
      >
        Close
      </button>
    </>
  );
}
