type Movie = {
  _id: string;
  title: string;
  genre: string;
  description: string;
};

type MovieCardProps = {
  movie: Movie;
  onDelete: (movieId: string) => void;
  isDeleting?: boolean;
};

function MovieCard({ movie, onDelete, isDeleting = false }: MovieCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-slate-900">{movie.title}</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
          {movie.genre}
        </span>
      </div>

      <p className="mb-5 text-sm leading-6 text-slate-700">{movie.description}</p>

      <button
        type="button"
        onClick={() => onDelete(movie._id)}
        disabled={isDeleting}
        className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
      >
        {isDeleting ? 'Deleting...' : 'Delete Movie'}
      </button>
    </article>
  );
}

export default MovieCard;
