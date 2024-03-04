import { useEffect, useRef, useContext } from "react";
import { modalContext } from "../../store/modal-context";
import { createPortal } from "react-dom";

export default function Modal() {
  const { isOpen, currentView } = useContext(modalContext);
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);
  //console.log("Modal");

  return createPortal(
    <>
      <dialog
        ref={dialog}
        className="fixed inset-0 min-h-[480px] min-w-[320px] rounded-md bg-slate-300 p-4 backdrop:bg-black/50"
      >
        {currentView}
      </dialog>
    </>,
    document.getElementById("modal"),
  );
}
