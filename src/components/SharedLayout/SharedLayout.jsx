import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.container}>
        <header className={css.header}>
            <BsCameraReels size={40} />
        <nav>
          <Link to="/" end className={css.link}>Home</Link>
          <Link to="/movies" className={css.link}>Movies</Link>
        </nav>
        </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
</div>

  );
};

export default SharedLayout;