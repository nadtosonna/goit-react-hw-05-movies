import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import { fetchMoviesByID } from 'shared/api/movies';
import css from './TrailerPage.module.css';

const Trailer = () => {
    const { id } = useParams();
    const [trailer, setTrailer] = useState('');

    useEffect(() => {
        fetchMoviesByID(id).then(response => setTrailer(response));
    }, [id]);

    const opts = {
		height: '590',
		width: '80%',
		playerVars: {
			autoplay: 1,
		}
    }
    const renderTrailer = () => {
        const officialTrailer = trailer.videos.results.find(item =>
            item.name.includes('Official Trailer') || item.name.includes('Teaser') || item.name.includes('Trailer'));
            
        if (!officialTrailer) {
            return <p className={css.note}>No trailer was found for this movie.</p>;
        } else return (
            <YouTube videoId={officialTrailer.key} opts={opts} />
        )
    }

    return (
        <section className={css.section}>
            {trailer.videos ? renderTrailer() : <p className={css.note}>No trailer was found for this movie.</p>}
        </section>
    )
}

export default Trailer;