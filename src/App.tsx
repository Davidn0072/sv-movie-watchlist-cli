import Sidebar from './components/Sidebar';
import AllMoviesPage from './pages/AllMoviesPage';
import AddMoviePage from './pages/AddMoviePage';
import SearchMoviesPage from './pages/SearchMoviesPage';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl shadow-xl">
        <Sidebar />

        <main className="flex-1 bg-white p-10">
          <Routes>
            <Route path="/" element={<Navigate to="/all-movies" replace />} />
            <Route path="/all-movies" element={<AllMoviesPage />} />
            <Route path="/add-movie" element={<AddMoviePage />} />
            <Route path="/search-movies" element={<SearchMoviesPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
