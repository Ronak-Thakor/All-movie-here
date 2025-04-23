import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]); // This will be fetched from backend later

  const handleSearch = async (e) => {
    e.preventDefault();
    // For now, we'll mock some data
    setMovies([
      { _id: '1', title: 'Inception', year: 2010, language: 'English' },
      { _id: '2', title: 'Parasite', year: 2019, language: 'Korean' }
    ]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Search Movies</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {movies.map(movie => (
          <div key={movie._id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-600">{movie.language} - {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
