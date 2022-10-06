import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));

export function App() {
  return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
  )
}

