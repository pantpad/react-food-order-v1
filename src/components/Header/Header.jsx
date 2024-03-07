import Cart from "../Cart/Cart";
import CartHistory from "../Cart/CartHistory";

import { useContext } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

export default function Header() {
  const { openModal } = useContext(modalContext);
  const { cartLength } = useContext(foodContext);

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
          <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#ffc404]">
            REACTFOOD
          </h2>
        </section>
        <nav className="text-[#ffc404]">
          <ul className="flex gap-4 font-semibold uppercase [&>*]:cursor-pointer">
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
              Cart - ({cartLength})
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
