import { useState, useEffect } from "react";
import { fetchMovies } from "shared/api/movies";
import { Loader } from "shared/Loader/Loader";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setMovies(prev => ({
                    ...prev,
                }));
                setIsLoading(true);
                const data = await fetchMovies(page);
                setMovies(prev => ({
                    ...prev,
                    movies: [...prev.movies, ...data],
                }));
                console.log(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        getMovies();
    }, [setMovies, page]);
}
