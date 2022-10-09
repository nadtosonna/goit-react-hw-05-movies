import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "shared/api/movies";
import ReviewBlock from "components/ReviewsBlock/ReviewsBlock";
import css from './ReviewsPage.module.css';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState('');

    useEffect(() => {
        fetchReviews(id).then(response => setReviews(response));
    }, [id]);

    return (
        <section className={css.section}>
            {reviews && reviews.results.length !== 0 ? (
                <ul className={css.reviews}>
                    {reviews.results.map(({id, ...review}) => {
                        return (
                            <li key={id}>
                                <ReviewBlock {...review} />
                            </li>
                        )
                    }
                    )}
                </ul>
            ) : <p className={css.note}>No reviews were found for this movie.</p>}
        </section>
    )
}

export default Reviews;