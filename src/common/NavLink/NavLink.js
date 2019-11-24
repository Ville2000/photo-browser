import React from "react";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#ede574" : "white",
          borderBottom: isCurrent ? "2px solid #ede574" : "none",
          textDecoration: "none",
          padding: "0 0 0.125rem 0",
          fontWeight: isCurrent ? "bold" : "normal"
        }
      };
    }}
  />
);

export default NavLink;
