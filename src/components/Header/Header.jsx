import Nav from "./Nav";

export default function Header() {
  //console.log("Header");
  return (
    <>
      <header className="sticky top-0 flex w-full flex-wrap items-center justify-between border-b border-white/35 bg-gradient-to-r from-[#29251c] to-[#29251c] px-8 py-4 max-sm:px-4 max-[400px]:justify-center">
        <section
          id="title"
          className="flex items-center gap-4 max-[400px]:text-sm"
        >
          <img
            src="./logo.jpg"
            alt="logo"
            className="h-16 w-16 rounded-full border-2 border-white/35"
          />
          <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#ffc404]">
            REACTFOOD
          </h2>
        </section>
        <Nav />
      </header>
    </>
  );
}
