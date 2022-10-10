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
        const officialTrailer = trailer.videos.results.find(item => item.name === 'Official Trailer');

        return (
            <YouTube videoId={officialTrailer.key} opts={opts} />
        )
    }

    return (
        <section>
            {trailer.length > 0 ? renderTrailer() : <p className={css.note}>No trailer was found for this movie.</p>}
        </section>
    )
}

export default Trailer;