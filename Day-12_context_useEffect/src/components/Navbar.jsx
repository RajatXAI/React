const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 border-b border-[#d9e2df] bg-white/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-[#173f37]"
        >
          Grove<span className="text-[#6a9b7d]">.</span>
        </a>
        <div className="flex items-center gap-5 text-sm font-medium text-[#40534e] sm:gap-8">
          <button
            type="button"
            className="cursor-pointer transition-colors hover:text-[#173f37]"
          >
            Home
          </button>
          <button
            type="button"
            className="cursor-pointer transition-colors hover:text-[#173f37]"
          >
            Cart
          </button>
        </div>
        <button className="rounded-md border border-[#b8cbc4] px-3 py-2 text-sm font-medium text-[#28594f] transition-colors hover:bg-[#f3f6f4]">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
