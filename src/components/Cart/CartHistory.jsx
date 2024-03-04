import { useContext } from "react";
import { modalContext } from "../../store/modal-context";

export default function CartHistory({ cart }) {
  const { closeModal } = useContext(modalContext);
  const isCartEmpty = cart.length < 1;
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
