import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import config from '../config';
import { deleteMovieById } from '../services/movieApi';

type Movie = {
  _id: string;
  title: string;
  genre: string;
  description: string;
};

function SearchMoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deletingMovieId, setDeletingMovieId] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const response = await fetch(
          `${config.API_URL}/movies/search?name=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error('Failed to search movies.');
        }

        const data = await response.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Unexpected error.');
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [query]);

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
      await deleteMovieById(movieId);

      setMovies((currentMovies) => currentMovies.filter((movie) => movie._id !== movieId));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error.');
    } finally {
      setDeletingMovieId('');
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800">Search Movies</h2>
      <p className="mt-2 text-sm text-slate-500">Type movie name to filter results.</p>

      <div className="mt-5 max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by movie title..."
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-300 transition focus:ring-2"
        />
      </div>

      {isLoading && <p className="mt-4 text-sm text-slate-600">Searching...</p>}
      {errorMessage && <p className="mt-4 text-sm font-medium text-red-600">{errorMessage}</p>}
      {!isLoading && !errorMessage && movies.length === 0 && (
        <p className="mt-4 text-sm text-slate-600">No matching movies found.</p>
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

export default SearchMoviesPage;
