import MovieCard from "./movieCard";
function MovieMapping({ popularMovies }) {
  return (
    <>
      {popularMovies?.map((item) => (
        <MovieCard item={item} />
      ))}
    </>
  );
}

export default MovieMapping;
