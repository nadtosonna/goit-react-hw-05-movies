import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.container}>
        <header className={css.header}>
            <BsCameraReels size={30} />
        <nav>
          <NavLink to="/" end className={css.link}>Home</NavLink>
          <NavLink to="/movies" className={css.link}>Movies</NavLink>
        </nav>
        </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
</div>

  );
};

export default SharedLayout;