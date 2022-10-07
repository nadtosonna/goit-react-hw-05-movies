import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>The page you were looking for is not found!</h1>
            <h2>Maybe this link can help you:</h2>
            <p className={css.link}><Link to={"/movies"}>Movies</Link></p>
        </div>
      )
}