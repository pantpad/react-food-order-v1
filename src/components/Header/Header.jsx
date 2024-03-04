import { useState } from "react";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";

export default function Header({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState(null);

  function handleModalOpening(view) {
    openModal();
    setCurrentView(view);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
                handleModalOpening("history");
              }}
            >
              Order History
            </li>
            <li
              onClick={() => {
                handleModalOpening(<Cart cart={cart} />);
              }}
            >
              Cart - (n)
            </li>
          </ul>
        </nav>
      </header>
      <Modal open={isOpen} closeModal={closeModal}>
        {currentView}
      </Modal>
    </>
  );
}
