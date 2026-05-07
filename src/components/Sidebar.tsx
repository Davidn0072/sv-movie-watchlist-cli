function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 px-6 py-8 text-white">
      <h1 className="text-3xl font-bold tracking-wide">WELCOME</h1>

      <div className="my-6 h-px bg-slate-700" />

      <nav className="space-y-3">
        <button
          type="button"
          className="w-full rounded-md bg-slate-800 px-4 py-3 text-left text-sm font-semibold tracking-wide transition hover:bg-slate-700"
        >
          ALL MOVIES
        </button>
        <button
          type="button"
          className="w-full rounded-md px-4 py-3 text-left text-sm font-semibold tracking-wide transition hover:bg-slate-800"
        >
          ADD MOVIE
        </button>
        <button
          type="button"
          className="w-full rounded-md px-4 py-3 text-left text-sm font-semibold tracking-wide transition hover:bg-slate-800"
        >
          SEARCH MOVIES
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
