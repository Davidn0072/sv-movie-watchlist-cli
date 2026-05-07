function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 px-6 py-8 text-white">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-5 w-5 flex-col justify-center gap-1 rounded-md bg-red-500 px-1 shadow-sm shadow-red-900/60"
          aria-hidden="true"
        >
          <span className="h-0.5 w-full rounded bg-white/90" />
          <span className="h-0.5 w-full rounded bg-white/90" />
        </span>
        <h1 className="text-3xl font-bold tracking-wide">WELCOME</h1>
      </div>

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
