import React from "react";
import { Link } from "@reach/router";
import styles from "./FourOhFour.module.css";

const FourOhFour = () => {
  return (
    <>
      <p>
        Sorry, nothing here
        <span role="img" aria-label="Sad face">
          😔
        </span>
      </p>
      <p>
        Maybe you'd like to <Link to="/">browse photos</Link>?
      </p>
    </>
  );
};

export default FourOhFour;
