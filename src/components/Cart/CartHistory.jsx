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
  console.log(orders);
  return (
    <>
      <h1>History</h1>
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
      <button onClick={closeModal}>Close</button>
    </>
  );
}

function OrderItem({ total, date }) {
  return (
    <>
      <p>total: {total}</p>
      <p>date: {date}</p>
    </>
  );
}

// {
//   "id": "o1",
//   "meals": [
//     {
//       "id": "m1",
//       "name": "Mac & Cheese",
//       "price": "8.99",
//       "quantity": "1"
//     }
//   ],
//   "total": "8.99",
//   "date": "today"
// }
