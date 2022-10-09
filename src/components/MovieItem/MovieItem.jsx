import { useLocation, Outlet, Link } from "react-router-dom";
import { BackLink } from "components/BackLink/BackLink";
import { Suspense } from "react";
import css from './MovieItem.module.css';

const MovieItem = ({ movie: { title, overview, genres, poster_path, vote_average, release_date }}) => {

    const releaseDate = release_date ? release_date?.split('-')[0] : 'No data';
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    return (
        <div>
            <BackLink to={backLinkHref}>Back to Movies</BackLink>
            <div className={css.movie}>
                <div className={css.imgBlock}>
                    <img src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={title} className={css.image} />
                </div>
                <div className={css.descriptionBlock}>
                    <div className={css.titleBlock}>
                        <h1 className={css.title}>{title} ({releaseDate})</h1>
                        <p className={css.rating}>User Score: {Math.round(vote_average * 10)}%</p>
                    </div>
                    <h2 className={css.overviewTitle}>Overview:</h2>
                    <p className={css.overview}>{overview}</p>
                    <h2 className={css.genresTitle}>Genres:</h2>
                    <p>{genres.map(genres => (
                        <span className={css.genres} key={genres.name}>{genres.name}</span>))}
                    </p>
                </div>
            </div>
            <div className={css.additional}>
                <h2 className={css.additionalTitle}>Additional information:</h2>
                <div className={css.cast}><Link to="cast" state={{ from: backLinkHref }}>Cast</Link></div>
                <div className={css.reviews}><Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link></div>
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;