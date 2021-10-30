import * as React from "react";

import Grid from "components/design-system/Grid";

import styles from "styles/pages/DesignSystem.module.css";

export default function DesignSystem() {
  React.useEffect(() => {
    document.body.classList.add("bg-dark");
  }, []);

  return (
    <div className="container text-white">
      <h1>Design system</h1>
      <section id="colors">
        <h2>
          <span>01</span> colors
        </h2>
        <div className={`${styles.colors} flex`}>
          <Grid gap="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>#0B0D17</div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </Grid>
          <Grid gap="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem" }} className="text-dark bg-accent">
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span> 231°, 77%, 90%
            </p>
          </Grid>
          <Grid gap="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem" }} className="text-dark  bg-white">
              #FFFFFF
            </div>
            <p>
              <span className="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span> 0°, 0%, 100%
            </p>
          </Grid>
        </div>
      </section>
    </div>
  );
}
