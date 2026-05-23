const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 h-20 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <h1 className="text-3xl font-semibold">Brand</h1>

        <div className="flex items-center gap-6">
          <button className="cursor-pointer">Search</button>
          <button className="cursor-pointer">Profile</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;