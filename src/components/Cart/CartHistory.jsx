import { useContext } from "react";
import { modalContext } from "../../store/modal-context";

import { useFetch } from "../../hooks/useFetch";
import { fetchOrders } from "../../http";

export default function CartHistory() {
  const { closeModal } = useContext(modalContext);
  const { data: orders, error, isFetching } = useFetch(fetchOrders, []);
  if (isFetching) return <p>Loading data . . .</p>;

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

function OrderItem({ customer, items, timeStamp }) {
  return (
    <>
      <article className="mb-2 border border-white/35 p-4">
        <section className="mb-4 mt-4 flex flex-col gap-2">
          {items.map((item) => (
            <>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </>
          ))}
        </section>
        <p>who? {customer.fullName}</p>
        <p>timeStamp: {timeStamp}</p>
      </article>
    </>
  );
}
