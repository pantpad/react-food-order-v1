import { useContext } from "react";
import { modalContext } from "../../store/modal-context";

export default function CartSuccess() {
  const { closeModal } = useContext(modalContext);
  return (
    <>
      <section className="text-left">
        <h1>SUCCESS!</h1>
        <p className="mt-2">Your order was submitted successfully.</p>
        <p className="mt-2">
          We will get back to you with more details via email within the next
          few minutes.
        </p>
      </section>
      <section className="mt-4 flex justify-end gap-2 [&_button]:rounded-md [&_button]:border [&_button]:border-black/25 [&_button]:p-2">
        <button className="bg-amber-300" onClick={closeModal}>
          Okay
        </button>
      </section>
    </>
  );
}
