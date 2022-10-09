import MovieItem from "components/MovieItem/MovieItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesByID } from "shared/api/movies";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        fetchMoviesByID(id).then(response => setMovie(response));
    }, [id]);

    return (
        <main>
            {movie && <MovieItem movie={movie} />}
        </main>
    );
};

export default MovieDetails;