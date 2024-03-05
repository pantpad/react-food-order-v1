import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

import Cart from "./Cart";

export default function CartCheckout() {
  const { cartTotal } = useContext(foodContext);
  const { changeView, closeModal } = useContext(modalContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <section>
          <h1>Checkout</h1>
          <p>Total Amount: ${cartTotal}</p>
        </section>
        <section className="mt-4 flex flex-col justify-start gap-4 [&_div]:flex [&_div]:flex-col [&_div]:gap-1">
          <div>
            <label htmlFor="">Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Street</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Postal Code</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
        </section>
        <section></section>
        <section className="mt-4 flex justify-end gap-2 [&_button]:rounded-md [&_button]:border [&_button]:border-black/25 [&_button]:p-2">
          <button
            type="button"
            className="mr-auto bg-yellow-800"
            onClick={() => {
              changeView(<Cart />);
            }}
          >
            Go Back
          </button>
          <button type="button" className="bg-red-300" onClick={closeModal}>
            Close
          </button>
          <button
            type="submit"
            className="bg-amber-300"
            onClick={() => {
              console.log("submit order");
            }}
          >
            Submit Order
          </button>
        </section>
      </form>
    </>
  );
}
