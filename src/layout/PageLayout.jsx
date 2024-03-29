/* eslint-disable react/prop-types */

export default function PageLayout({ className, children }) {
  console.log("pagelayout");
  return (
    <>
      <main
        className={`${className ? className + " " : ""}mx-auto flex flex-col p-4 text-center max-sm:p-0`}
      >
        {children}
      </main>
    </>
  );
}
