import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'shared/api/movies';

const HomePage = () => {
    const [trending, setTrending] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendingMovies(1).then(response => setTrending(response.results));
    }, []);

    return (
        <main>
            <ul>
                {trending.map(item => (
                    <li key={item.id}>
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