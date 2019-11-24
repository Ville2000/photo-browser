import React from "react";
import { Router, Link } from "@reach/router";

import styles from "./App.module.css";
import PhotoList from "./photos/PhotoList/PhotoList";
import PhotoDetails from "./photos/PhotoDetails/PhotoDetails";
import FourOhFour from "./common/FourOhFour/FourOhFour";
import NavLink from "./common/NavLink/NavLink";

const App = () => {
  return (
    <>
      <header className={styles.app__header}>
        <div>
          <Link className={styles.app__header__headingLink} to="/">
            <h1 className={styles.app__header__heading}>PHOTO BROWSER</h1>
          </Link>
          <nav className={styles.app__nav}>
            <NavLink to="/">BROWSE</NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.app__main}>
        <Router>
          <PhotoList path="/" />
          <PhotoDetails path="/photos/:photoId" />
          <FourOhFour default />
        </Router>
      </main>
      <footer className={styles.app__footer}>
        <div>
          <p>Ville Haapavaara 2019</p>
          <p>ville.haapavaara@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default App;
