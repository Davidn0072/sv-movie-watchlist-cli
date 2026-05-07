import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import config from '../config';

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
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [deletingMovieId, setDeletingMovieId] = useState('');

  useEffect(() => {
    async function loadMovies() {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const response = await fetch(`${config.API_URL}/movies`);
        if (!response.ok) {
          throw new Error('Failed to load movies from server');
        }

        const data = await response.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Unexpected error');
      } finally {
        setIsLoading(false);
      }
    }

    loadMovies();
  }, []);

  async function handleDelete(movieId: string) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this movie? This action cannot be undone.'
    );
    if (!confirmed) {
      return;
    }

    try {
      setDeletingMovieId(movieId);
      setErrorMessage('');

      const response = await fetch(`${config.API_URL}/movies/${movieId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete movie');
      }

      setMovies((currentMovies) => currentMovies.filter((movie) => movie._id !== movieId));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error');
    } finally {
      setDeletingMovieId('');
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800">All Movies</h2>
      <p className="mt-2 text-sm text-slate-500">Movies loaded from backend API.</p>

      {isLoading && <p className="mt-4 text-sm text-slate-600">Loading movies...</p>}
      {errorMessage && <p className="mt-4 text-sm font-medium text-red-600">{errorMessage}</p>}
      {!isLoading && !errorMessage && movies.length === 0 && (
        <p className="mt-4 text-sm text-slate-600">No movies found.</p>
      )}

      <div className="mt-6 grid gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
            isDeleting={deletingMovieId === movie._id}
          />
        ))}
      </div>
    </section>
  );
}

export default AllMoviesPage;
