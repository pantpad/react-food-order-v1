import { useContext } from "react";
import { modalContext } from "../../store/modal-context";

export default function CartInput({ label, children, data, ...props }) {
  const { changeFormData, onErrorShow } = useContext(modalContext);
  return (
    <>
      <div>
        <label htmlFor={label}>{children}</label>
        <input
          name={label}
          autoFocus
          onChange={changeFormData}
          onBlur={onErrorShow}
          {...props}
        />
        <p className="mb-2 mt-1 h-4 text-sm text-red-500">
          {data.error && data.showError && data.error}
        </p>
      </div>
    </>
  );
}
