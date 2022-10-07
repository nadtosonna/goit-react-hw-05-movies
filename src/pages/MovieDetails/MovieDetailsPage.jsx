import { BackLink } from "components/BackLink/BackLink";
import { useEffect, useState  } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchMoviesByID } from "shared/api/movies";
import css from './MovieDetailsPage.module.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://image.tmdb.org/t/p/w500/h5oGodvcoq8cyIDTy79yKn4qbey.jpg';
    const releaseDate = movie.release_date ? movie.release_date?.split('-')[0] : 'No data';

    useEffect(() => {
        fetchMoviesByID(id).then(response => setMovie(response));
    }, [id]);

    return (
        <main>
        {movie && (
        <div>
         <BackLink to={backLinkHref}>Back to Movies</BackLink>
          <div className={css.movie}>
            <div className={css.imgBlock}>
              <img src={imagePath} alt="" className={css.image}/>
            </div>
            <div className={css.descriptionBlock}>
            <div className={css.titleBlock}>
            <h1 className={css.title}>{movie.original_title} ({releaseDate})</h1>
            <p className={css.rating}>User Score: {Math.round(movie.vote_average * 10)}%</p>
            </div>
              <h2 className={css.overviewTitle}>Overview:</h2>
              <p className={css.overview}>{movie.overview}</p>
              <h2 className={css.genresTitle}>Genres:</h2>
              <p>
                {movie.genres.map(genres => (
                  <span className={css.genres} key={genres.name}>{genres.name}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
        </main>
    )
};

export default MovieDetails;