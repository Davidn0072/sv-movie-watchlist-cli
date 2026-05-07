import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl shadow-xl">
        <Sidebar />

        <main className="flex-1 bg-white p-10">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-800">Main Content Area</h2>
            <p className="mt-3 text-slate-600">
              Sidebar layout is ready. Next step is connecting each menu item to routes.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
