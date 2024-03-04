/* eslint-disable react/prop-types */

export default function PageLayout({ className, children }) {
  return (
    <>
      <main
        className={`${className ? className + " " : ""}mx-auto flex flex-col p-4 text-center`}
      >
        {children}
      </main>
    </>
  );
}

//
