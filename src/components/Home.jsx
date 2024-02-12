import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { images } from "../constants/navlinks";
import svgImage from "../assets/react.svg";

const Home = (props) => {
  return (
    <article className={props.home}>
      <header className="p-3 flex flex-row justify-between bg-backc">
        <img src={svgImage} alt="logo.jpg" className="logo" />
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

      <section className="my-2 space-y-10">
        {images.map((image) => (
          <div className="card px-4 ">
            <img src={image.src} alt="image" />
            <h3>{image.title}</h3>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Home;
