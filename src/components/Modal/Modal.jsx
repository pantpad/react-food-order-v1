export default function Modal({ children, ...props }) {
  return (
    <>
      <dialog className="bg-slate-300 p-4" {...props}>
        {children}
      </dialog>
    </>
  );
}
