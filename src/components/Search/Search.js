import React from "react";
import "./Search.css";

export default function Search({ handleChange }) {
  return (
    <div className="searchbox">
      <button className="btn-menu">
        <img
          src="https://img.icons8.com/cute-clipart/24/000000/top-menu.png"
          alt="menu-icon"
        />
      </button>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        name="search"
        className="search"
        onChange={handleChange}
        autoComplete="off"
      />
      <button className="btn-search">
        <img
          src="https://img.icons8.com/cotton/24/000000/search--v2.png"
          alt="search icon"
        />
      </button>
    </div>
  );
}
