import { useState } from "react";

import NavLinks from "./NavLinks";

export default function NavAnimated() {
  const [openNav, setOpenNav] = useState(false);

  function toggleNavBar() {
    setOpenNav((prev) => !prev);
  }

  return (
    <>
      <nav className="text-[#ffc404] transition-all duration-300">
        <NavLinks
          className={
            "hidden gap-4 font-semibold uppercase md:flex [&>*]:cursor-pointer"
          }
        />
        <div className="w-8 text-center text-2xl md:hidden">
          <button onClick={toggleNavBar}>{openNav ? "✕" : "☰"}</button>
        </div>
      </nav>
      {openNav && (
        <NavLinks
          className={
            "flex basis-full animate-[fade-in-flex_0.3s_linear] flex-col items-center gap-2 font-semibold uppercase text-[#ffc404] md:hidden [&>*]:cursor-pointer"
          }
        />
      )}
    </>
  );
}
