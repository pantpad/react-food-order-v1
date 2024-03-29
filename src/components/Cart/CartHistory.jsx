import { useContext } from "react";
import { modalContext } from "../../store/modal-context";

import { useFetch } from "../../hooks/useFetch";
import { fetchOrders } from "../../http";

import { formatEUDate } from "../../utils/dateFormatter";

export default function CartHistory() {
  const { closeModal } = useContext(modalContext);
  const { data: orders, error, isFetching } = useFetch(fetchOrders, []);

  if (isFetching)
    return (
      <>
        <h1>History</h1>
        <p>Loading data . . .</p>
      </>
    );

  if (error)
    return (
      <>
        <p>{error.message} history</p>
        <button onClick={closeModal}>Close</button>
      </>
    );

  //console.log("CartHistory");
  return (
    <>
      <h1>History</h1>
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
      <button
        onClick={closeModal}
        className="float-end mt-2 rounded-md bg-red-300 p-2"
      >
        Close
      </button>
    </>
  );
}

function OrderItem({ id, customer, items, timeStamp, cartTotal }) {
  return (
    <>
      <article className="relative">
        <details className="group mb-2 rounded-md [&>section]:open:animate-[fade-in_0.3s_ease-out_none] [&_summary]:open:rounded-b-none">
          <summary className="flex cursor-pointer flex-wrap  justify-between gap-8 rounded-md border border-black/35 bg-slate-500/90 p-4 text-sm text-white">
            <section className="flex justify-between gap-2 text-left">
              <div className="flex flex-col">
                <label>Order done on:</label>
                <p>{formatEUDate(timeStamp)}</p>
              </div>
              <div className="flex flex-col">
                <label>Total:</label>
                <p className="font-bold">${cartTotal}</p>
              </div>
              <div className="flex flex-col">
                <label>Send to:</label>
                <p className="cursor-pointer text-sky-300 hover:font-semibold">
                  {customer.fullName}
                </p>
              </div>
            </section>
            <section>
              <div className="flex flex-col">
                <label>Order id: {id}</label>
                <p className="cursor-pointer text-sky-300 hover:font-semibold">
                  See order details
                </p>
              </div>
            </section>
          </summary>
          <section className="rounded-b-md border border-t-0 border-black/35 bg-slate-500/50 p-4">
            {items.map((item) => (
              <ItemDetails key={item.id} {...item} />
            ))}
          </section>
        </details>
      </article>
    </>
  );
}

function ItemDetails({ name, price, quantity }) {
  return (
    <>
      <div className="mb-2 grid grid-cols-[3fr,1fr] gap-4 border-b border-black/30 text-black/90">
        <p>
          {name} - ${price}
        </p>
        <p>
          {quantity} - ${price * quantity}
        </p>
      </div>
    </>
  );
}
