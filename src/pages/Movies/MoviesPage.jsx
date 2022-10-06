import { useState, useEffect } from "react";
import { fetchMovies } from "shared/api/movies";
import { useLocation, useSearchParams } from "react-router-dom";
import { Loader } from "shared/Loader/Loader";
import SearchForm from "components/SearchForm/SearchForm";
import css from './MoviesPage.module.css';
import { Notify } from 'notiflix';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');
    const location = useLocation();

    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true);
                const data = await fetchMovies(searchQuery, page);
                setMovies(movies => [...movies, ...data]);               
                console.log(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        if (searchQuery) {
            getMovies();
        } 
    }, [searchQuery, page]);

    const onSearch = value => {
        setSearchParams({ searchQuery: value });
        setPage(1);
        setMovies([]);
    }

    return (
        <main>
            <SearchForm onSubmit={onSearch} />
            {isLoading && <Loader />}
            {error && Notify.failure('Please try again later!')}
        </main>
     
    )
}

export default MoviesPage;