import Grid from "components/design-system/Grid";

import styles from "styles/pages/DesignSystem.module.css";

export default function DesignSystem() {
  return (
    <div className="container text-white">
      <h1 className="ff-sans-cond uppercase">Design system</h1>
      <section id="colors">
        <h2 className="ff-sans-cond fs-500 uppercase letter-spacing-1">
          <span className={styles.number}>01</span> colors
        </h2>
        <div className={`${styles.colors} flex`}>
          <Grid gap="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }} className="ff-serif fs-500">
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </Grid>
          <Grid gap="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem" }} className="text-dark bg-accent ff-serif fs-500">
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
            <div style={{ padding: "3rem 1rem 1rem" }} className="text-dark  bg-white ff-serif fs-500">
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

      <section id="typography">
        <h2 className="ff-sans-cond fs-500 uppercase letter-spacing-1">
          <span className={styles.number}>02</span> typography
        </h2>
      </section>
    </div>
  );
}
