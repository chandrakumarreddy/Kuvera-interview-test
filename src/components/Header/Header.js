import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="header">
      <div className=" header__wrapper">
        <ul>
          <li className="header__brand">
            <Link to="/">Kuvera</Link>
          </li>
        </ul>
        <ul>
          <li>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            and{" "}
            <span role="img" aria-label="coffee">
              ☕{" "}
            </span>
            <a href="https://github.com/chandrakumarreddy">Chandra</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
