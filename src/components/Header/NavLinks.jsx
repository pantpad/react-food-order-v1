import Cart from "../Cart/Cart";
import CartHistory from "../Cart/CartHistory";

import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

export default function NavLinks({ ...props }) {
  const { openModal } = useContext(modalContext);
  const { cartLength } = useContext(foodContext);
  return (
    <>
      <ul {...props}>
        <li onClick={() => openModal(<CartHistory />)}>Order History</li>
        <li onClick={() => openModal(<Cart />)}>Cart - ({cartLength})</li>
      </ul>
    </>
  );
}
