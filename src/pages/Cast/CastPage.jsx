import CastBlock from "components/CastBlock/CastBlock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "shared/api/movies";
import css from './CastPage.module.css';

const CastPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState('');

    useEffect(() => {
        fetchCast(id).then(response => setCast(response));
    }, [id]);

  return (
    <section className={css.section}>
      <ul className={css.castList}>
      {cast && cast.cast
          .filter((actor, index) => {
            return index < 10;
          })
          .map(({id, ...cast}) => {
            return (
              <li key={id} className={css.castCard}>
                <CastBlock {...cast} />
              </li>
            );
          })}
    </ul>
    </section>);
    
}

export default CastPage;