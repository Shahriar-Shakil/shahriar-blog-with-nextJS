import React from "react";
import classes from "./hero.module.css";

import Image from "next/image";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/shahriar.jpg"
          alt="An image showing Shahriar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Shahriar</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        & Next JS
      </p>
    </section>
  );
}
