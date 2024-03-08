import { useContext, useState } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

import { updateOrders } from "../../http";

import Cart from "./Cart";
import CartSuccess from "./CartSuccess";

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
  const {
    changeView,
    closeModal,
    formData,
    formDataValues,
    changeFormData,
    clearFormData,
    onErrorShow,
  } = useContext(modalContext);
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
          <div>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formDataValues.fullName}
              onChange={changeFormData}
              autoFocus
              onBlur={onErrorShow}
            />
            <p className="mb-2 mt-1 h-4 text-sm text-red-500">
              {formData.fullName.error &&
                formData.fullName.showError &&
                formData.fullName.error}
            </p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formDataValues.email}
              onChange={changeFormData}
              onBlur={onErrorShow}
            />
            <p className="mb-2 mt-1  h-4 text-sm text-red-500">
              {formData.email.error &&
                formData.email.showError &&
                formData.email.error}
            </p>
          </div>
          <div>
            <label htmlFor="">Street</label>
            <input
              type="text"
              name="street"
              required
              value={formDataValues.street}
              onChange={changeFormData}
              onBlur={onErrorShow}
            />
            <p className="mb-2 mt-1 h-4 text-sm text-red-500">
              {formData.street.error &&
                formData.street.showError &&
                formData.street.error}
            </p>
          </div>
          <div>
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              name="postal-code"
              required
              value={formDataValues["postal-code"]}
              onChange={changeFormData}
              onBlur={onErrorShow}
            />
            <p className="mb-2 mt-1 h-4 text-sm text-red-500">
              {formData["postal-code"].error &&
                formData["postal-code"].showError &&
                formData["postal-code"].error}
            </p>
          </div>
          <div>
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              required
              value={formDataValues.city}
              onChange={changeFormData}
              onBlur={onErrorShow}
            />
            <p className="mb-2 mt-1 h-4 text-sm text-red-500">
              {formData.city.error &&
                formData.city.showError &&
                formData.city.error}
            </p>
          </div>
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
