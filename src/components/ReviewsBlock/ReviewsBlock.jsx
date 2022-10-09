import css from './ReviewsBlock.module.css';

const ReviewBlock = ({ author, content }) => {
    return (
        <>
            <p className={css.author}>{author}:</p>
            <p className={css.content}>{content}</p>
        </>
    );
};
export default ReviewBlock;