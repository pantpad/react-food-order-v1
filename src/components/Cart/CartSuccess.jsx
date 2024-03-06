import { useContext } from "react";
import { modalContext } from "../../store/modal-context";

export default function CartSuccess() {
  const { closeModal } = useContext(modalContext);
  return (
    <>
      <h1>SUCCESS</h1>
      <section className="mt-4 flex justify-end gap-2 [&_button]:rounded-md [&_button]:border [&_button]:border-black/25 [&_button]:p-2">
        <button className="bg-amber-300" onClick={closeModal}>
          Okay
        </button>
      </section>
    </>
  );
}
