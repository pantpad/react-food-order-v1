import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

import { updateOrders } from "../../http";

import Cart from "./Cart";
import CartSuccess from "./CartSuccess";

function createOrder(cart, formData, cartTotal) {
  return {
    items: [...cart],
    customer: { ...formData },
    timeStamp: Date.now(),
    cartTotal,
  };
}

export default function CartCheckout() {
  const { cart, cartTotal, clearCart } = useContext(foodContext);
  const { changeView, closeModal } = useContext(modalContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //send put request -> if success show success .jsx else show alert
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData);

          const order = createOrder(cart, data, cartTotal);

          async function postData() {
            try {
              await updateOrders(order);
              clearCart();
              changeView(<CartSuccess />);
            } catch (err) {
              alert(err);
            }
          }

          postData();
        }}
      >
        <section>
          <h1>Checkout</h1>
          <p>Total Amount: ${cartTotal}</p>
        </section>
        <section className="mt-4 flex flex-col justify-start gap-4 [&_div]:flex [&_div]:flex-col [&_div]:gap-1">
          <div>
            <label htmlFor="">Full Name</label>
            <input type="text" name="fullName" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="">Street</label>
            <input type="text" name="street" />
          </div>
          <div>
            <label htmlFor="">Postal Code</label>
            <input type="text" name="postal-code" />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" name="city" />
          </div>
        </section>
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
