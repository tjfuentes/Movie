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
      <section className="p-3 space-y-5">
        <h1 className="text-primary font-bold text-5xl p-2">REVIEW</h1>
        <p className="text-xs text-justify px-2 opacity-80">
          Discover the magic of cinema. Explore a diverse movie catalog,
          featuring the latest releases and timeless classics. From cast details
          to plot summaries, find everything you need for an immersive movie
          experience.
        </p>
        <Button
          name="Create Account"
          style="mx-2 px-4 py-1 bg-primary rounded font-medium"
        />
      </section>
    </article>
  );
};

export default Home;
