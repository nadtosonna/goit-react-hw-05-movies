import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'shared/api/movies';
import css from "./HomePage.module.css";

const HomePage = () => {
    const [trending, setTrending] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendingMovies(1).then(response => setTrending(response.results));
    }, []);

    return (
        <main>
            <h2 className={css.title}>Tranding today</h2>
            <ul className={css.movieList}>
                {trending.map(item => (
                    <li key={item.id} className={css.movie}>
                        <Link to={`/movies/${item.id}`}
                            state={{ from: location }}>
                        {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default HomePage;