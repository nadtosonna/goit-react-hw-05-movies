import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const Home = lazy(() => import("../pages/Home/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFoundPage"));
const Movies = lazy(() => import("../pages/Movies/MoviesPage"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetailsPage"));
const Cast = lazy(() => import("../pages/Cast/CastPage"));
const Reviews = lazy(() => import("../pages/Reviews/ReviewsPage"));

export const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

