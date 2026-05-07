import { useState } from 'react';
import MovieCard from '../components/MovieCard';

const demoMovies = [
  {
    _id: 'demo-1',
    title: 'Inception',
    genre: 'Sci-Fi',
    description: 'A skilled thief enters dreams to plant an idea inside a target.',
  },
  {
    _id: 'demo-2',
    title: 'Parasite',
    genre: 'Thriller',
    description: 'Two families from different classes become dangerously connected.',
  },
  {
    _id: 'demo-3',
    title: 'Whiplash',
    genre: 'Drama',
    description: 'A young drummer faces intense pressure under a demanding mentor.',
  },
];

function AllMoviesPage() {
  const [movies, setMovies] = useState(demoMovies);

  function handleDelete(movieId: string) {
    setMovies((currentMovies) => currentMovies.filter((movie) => movie._id !== movieId));
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800">All Movies</h2>
      <p className="mt-2 text-sm text-slate-500">Demo data for UI preview (no server).</p>

      <div className="mt-6 grid gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}

export default AllMoviesPage;
