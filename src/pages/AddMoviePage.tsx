import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

function AddMoviePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm() {
    const trimmedTitle = title.trim();
    const trimmedGenre = genre.trim();
    const trimmedDescription = description.trim();

    if (trimmedTitle.length < 1 || trimmedTitle.length > 20) {
      alert('Title is required and must be between 1 and 20 characters.');
      return false;
    }

    if (trimmedGenre.length < 1) {
      alert('Genre is required and must contain at least 1 character.');
      return false;
    }

    if (trimmedDescription.length > 200) {
      alert('Description must be 200 characters or less.');
      return false;
    }

    return true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(`${config.API_URL}/movies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          genre: genre.trim(),
          description: description.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create movie.');
      }

      setTitle('');
      setGenre('');
      setDescription('');
      navigate('/all-movies');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Unexpected error.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800">Add Movie</h2>
      <p className="mt-2 text-sm text-slate-500">Create a new movie record.</p>

      <form
        className="mt-6 max-w-2xl space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={20}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-300 transition focus:ring-2"
            placeholder="Movie title"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="genre">
            Genre
          </label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-300 transition focus:ring-2"
            placeholder="Movie genre"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            maxLength={200}
            rows={5}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-300 transition focus:ring-2"
            placeholder="Movie description"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isSubmitting ? 'Adding Movie...' : 'Add Movie'}
        </button>
      </form>
    </section>
  );
}

export default AddMoviePage;
