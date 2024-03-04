import { useRef } from "react";

export default function Modal({ children, open, closeModal }) {
  const dialog = useRef();

  if (open) {
    dialog.current.showModal();
  }

  return (
    <>
      <form method="dialog">
        <dialog
          ref={dialog}
          className="fixed inset-0 min-h-[480px] min-w-[320px] rounded-md bg-slate-300 p-4 backdrop:bg-black/50"
        >
          {children}
          <button
            onClick={() => {
              dialog.current.close();
              closeModal();
            }}
          >
            Close
          </button>
        </dialog>
      </form>
    </>
  );
}
