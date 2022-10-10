import css from './CastBlock.module.css';

const CastBlock = ({ name, character, profile_path }) => {
    return (
        <>
            <img className={css.castImg} src={profile_path ? `https://www.themoviedb.org/t/p/w500${profile_path}` : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'} alt={name} />
            <h3 className={css.castTitle}>{name} <br /> as <br /> "{character}"</h3>
        </>
    )
}

export default CastBlock;