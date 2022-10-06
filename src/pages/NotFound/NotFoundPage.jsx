import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="container">
            <h1>The page you were looking for is not found!</h1>
            <h2>Maybe this link can help you:</h2>
            <p><Link to={"/movies"}>Movies</Link></p>
        </div>
      )
}