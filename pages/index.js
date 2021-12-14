import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import Flow from "components/Flow";
import MainNavigation from "components/MainNavigation";

import styles from "styles/pages/Index.module.css";

export default function Home() {
  React.useEffect(() => {
    const body = document.querySelector("body");

    body.classList.add(styles.body);

    return () => {
      body.classList.remove(styles.body);
    };
  }, []);

  return (
    <>
      <header className="flex" style={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <div>
          <Image src="/shared/logo.svg" alt="Space tourism logo" width="50" height="50" />
        </div>
        <MainNavigation />
      </header>
      <main className="grid-container grid-container--home">
        <Flow>
          <h1 className="ff-sans-cond fs-500 letter-spacing-1 text-accent uppercase flow">
            <span>So, you want to travel to</span>
            <span className="ff-serif fs-900 text-white uppercase block" style={{ lineHeight: 1.146 }}>
              Space
            </span>
          </h1>
          <p className="ff-sans-normal fs-400 text-accent">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </Flow>
        <div>
          <Link href="/destinations">
            <a className="ff-serif uppercase text-dark bg-white letter-spacing-3 large-button">Explore</a>
          </Link>
        </div>
      </main>
    </>
  );
}
