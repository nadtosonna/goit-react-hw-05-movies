import css from './CastBlock.module.css';

const CastBlock = ({ name, character, profile_path }) => {
    return (
        <>
            <img className={css.castImg} src={`https://www.themoviedb.org/t/p/w500${profile_path}`} alt={name} />
            <h3 className={css.castTitle}>{name} <br /> as <br /> "{character}"</h3>
        </>
    )
}

export default CastBlock;