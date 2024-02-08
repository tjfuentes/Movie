import React from "react";
import Button from "./Button";

const Home = (props) => {
  return (
    <article className={props.home}>
      <header className="p-3 flex flex-row justify-between bg-backc">
        <img src="..." alt="logo.jpg" className="logo" />
        <div className="login">
          <Button name="Login" style=" mx-3 px-3 py-2 rounded" />
          <Button name="Sign Up" style="bg-primary px-3 py-2 rounded" />
        </div>
      </header>
      <section className="p-3">
        <h1 className="text-primary font-extrabold text-4xl p-2">CornFlix</h1>
        <p className="text-lg text-justify px-2">
          Discover the magic of cinema. Explore a diverse movie catalog,
          featuring the latest releases and timeless classics. From cast details
          to plot summaries, find everything you need for an immersive movie
          experience.
        </p>
      </section>
    </article>
  );
};

export default Home;
