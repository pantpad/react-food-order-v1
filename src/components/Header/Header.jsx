export default function Header() {
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
          <ul>
            <li>Cart - (n)</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
