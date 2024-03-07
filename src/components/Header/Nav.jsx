import Cart from "../Cart/Cart";
import CartHistory from "../Cart/CartHistory";

import { useContext, useState } from "react";

import { modalContext } from "../../store/modal-context";
import { foodContext } from "../../store/food-context";

export default function Nav() {
  const { openModal } = useContext(modalContext);
  const { cartLength } = useContext(foodContext);

  const [openNav, setOpenNav] = useState(false);

  function toggleNavBar() {
    setOpenNav((prev) => !prev);
  }

  return (
    <>
      <nav className="text-[#ffc404]">
        <ul className="hidden gap-4 font-semibold uppercase md:flex [&>*]:cursor-pointer">
          <li onClick={() => openModal(<CartHistory />)}>Order History</li>
          <li onClick={() => openModal(<Cart />)}>Cart - ({cartLength})</li>
        </ul>
        <div className="w-8 text-center md:hidden">
          <button onClick={toggleNavBar}>{openNav ? "✕" : "☰"}</button>
        </div>
      </nav>
      {openNav && (
        <ul className="flex basis-full flex-col items-center gap-2 md:hidden [&>*]:cursor-pointer">
          <li onClick={() => openModal(<CartHistory />)}>Order History</li>
          <li onClick={() => openModal(<Cart />)}>Cart - ({cartLength})</li>
        </ul>
      )}
    </>
  );
}
