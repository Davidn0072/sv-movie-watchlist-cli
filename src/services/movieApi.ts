import config from '../config';

export async function deleteMovieById(movieId: string): Promise<void> {
  const response = await fetch(`${config.API_URL}/movies/${movieId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete movie');
  }
}
