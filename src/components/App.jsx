import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const Home = lazy(() => import("../pages/Home/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFoundPage"));
const Movies = lazy(() => import("../pages/Movies/MoviesPage"));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

