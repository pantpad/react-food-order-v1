import { useContext, useState } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

import { updateOrders } from "../../http";

import Cart from "./Cart";
import CartSuccess from "./CartSuccess";
import CartInput from "./CartInput";

function createOrder(cart, formDataValues, cartTotal) {
  return {
    items: [...cart],
    customer: { ...formDataValues },
    timeStamp: Date.now(),
    cartTotal,
  };
}

export default function CartCheckout() {
  const { cart, cartTotal, clearCart } = useContext(foodContext);
  const { changeView, closeModal, formData, formDataValues, clearFormData } =
    useContext(modalContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const order = createOrder(cart, formDataValues, cartTotal);
          //send put request -> if success show success .jsx else show alert
          async function postData() {
            try {
              setIsSubmitting(true);
              await updateOrders(order);
              clearCart();
              clearFormData();
              changeView(<CartSuccess />);
            } catch (err) {
              setFormError(err);
            } finally {
              setIsSubmitting(false);
            }
          }

          postData();
        }}
      >
        <section>
          <h1>Checkout</h1>
          <p>Total Amount: ${cartTotal}</p>
        </section>
        <section className="mt-4 flex flex-col justify-start [&_div]:flex [&_div]:flex-col [&_div]:gap-1">
          <CartInput
            label={"fullName"}
            type="text"
            data={formData.fullName}
            value={formDataValues.fullName}
            required
          >
            Full Name
          </CartInput>
          <CartInput
            type="email"
            label={"email"}
            data={formData.email}
            value={formDataValues.email}
            required
          >
            Email
          </CartInput>
          <CartInput
            type="text"
            label={"street"}
            data={formData.street}
            value={formDataValues.street}
            required
          >
            Street
          </CartInput>

          <CartInput
            type="text"
            label={"postal-code"}
            data={formData["postal-code"]}
            value={formDataValues["postal-code"]}
            required
          >
            Postal Code
          </CartInput>
          <CartInput
            type="text"
            label={"city"}
            data={formData.city}
            value={formDataValues.city}
            required
          >
            City
          </CartInput>
        </section>

        <section className="mt-8 flex justify-end gap-2 [&_button]:rounded-md [&_button]:border [&_button]:border-black/25 [&_button]:p-2">
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
            className={`${isSubmitting ? "bg-amber-300/50" : "bg-amber-300"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </button>
        </section>
        {formError && (
          <p className="mt-2 font-semibold text-red-500">
            Error while sending data. . .
          </p>
        )}
      </form>
    </>
  );
}
