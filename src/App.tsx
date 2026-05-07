import Sidebar from './components/Sidebar';
import AllMoviesPage from './pages/AllMoviesPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl shadow-xl">
        <Sidebar />

        <main className="flex-1 bg-white p-10">
          <AllMoviesPage />
        </main>
      </div>
    </div>
  );
}

export default App;
