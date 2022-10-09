import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";
import css from "./SharedLayout.module.css";
import { Link } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <div className={css.container}>
        <header className={css.header}>
        <BsCameraReels size={40} style={{
          color: 'rgb(87, 123, 190)',
          borderRadius: "20%",
          padding: '8px',
          border: '1px solid transparent',
          boxShadow: '2px 2px 5px black',
        }} />
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;