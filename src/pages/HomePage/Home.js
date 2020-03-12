import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const navigateTo = () => history.push("/explore");
  return (
    <main id="home" className="home">
      <div className="home__wrapper">
        <p>
          Do you need the coolest and the most awesome platform to manage your
          Mutual Funds. Here We are
        </p>
        <h1>Kavura</h1>
        <p>The best solution to Manage Funds</p>
        <button className="main_btn" onClick={navigateTo}>
          Click here to Explore
        </button>
      </div>
    </main>
  );
}
