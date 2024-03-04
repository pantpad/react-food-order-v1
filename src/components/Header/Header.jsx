import Cart from "../Cart/Cart";
import CartHistory from "../Cart/CartHistory";

import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

export default function Header() {
  const { openModal } = useContext(modalContext);
  const { cart } = useContext(foodContext);

  //console.log("Header");
  return (
    <>
      <header className="flex w-full items-center justify-between px-8 py-4">
        <section id="title" className="flex items-center gap-4">
          <img
            src="./logo.jpg"
            alt="logo"
            height={64}
            width={64}
            className="rounded-full border-2 border-white/35"
          />
          <h2>REACT-FOOD</h2>
        </section>
        <nav>
          <ul className="flex gap-4 [&>*]:cursor-pointer">
            <li
              onClick={() => {
                openModal(<CartHistory />);
              }}
            >
              Order History
            </li>
            <li
              onClick={() => {
                openModal(<Cart />);
              }}
            >
              Cart - ({cart.length})
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
