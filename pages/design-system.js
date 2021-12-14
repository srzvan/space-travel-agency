import Flow from "components/Flow";

import styles from "styles/pages/DesignSystem.module.css";

export default function DesignSystem() {
  return (
    <div className="container text-white" style={{ paddingBlock: "4rem" }}>
      <h1 className="ff-sans-cond uppercase" style={{ marginBottom: "6.25rem" }}>
        Design system
      </h1>

      <section id="colors" style={{ marginBottom: "9.25rem" }}>
        <h2 className="numbered-title">
          <span>01</span>colors
        </h2>
        <div className={`${styles.colors} flex`}>
          <Flow spacing="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }} className="ff-serif fs-500">
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </Flow>
          <Flow spacing="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem" }} className="text-dark bg-accent ff-serif fs-500">
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span> 231°, 77%, 90%
            </p>
          </Flow>
          <Flow spacing="0.5rem">
            <div style={{ padding: "3rem 1rem 1rem" }} className="text-dark  bg-white ff-serif fs-500">
              #FFFFFF
            </div>
            <p>
              <span className="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span> 0°, 0%, 100%
            </p>
          </Flow>
        </div>
      </section>

      <section id="typography" style={{ marginBottom: "10rem" }}>
        <h2 className="numbered-title">
          <span>02</span>typography
        </h2>
        <div className="flex">
          <Flow spacing="1.5rem" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
              <p className="ff-serif fs-900 uppercase">Earth</p>
            </div>
            <div>
              <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
              <p className="ff-serif fs-800 uppercase">Venus</p>
            </div>
            <div>
              <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
              <p className="ff-serif fs-700 uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
              <p className="ff-serif fs-600 uppercase">Uranus, Neptune, & Pluto</p>
            </div>
            <div>
              <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
              <p className="ff-sans-cond fs-500 uppercase letter-spacing-1 text-accent">
                So, you want to travel to space
              </p>
            </div>
          </Flow>

          <Flow spacing="2.5rem" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
              <p className="fs-500 ff-serif">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
              <p className="fs-200 ff-sans-cond letter-spacing-3 uppercase">Avg. Distance</p>
            </div>
            <div>
              <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
              <p className="fs-300 ff-sans-cond letter-spacing-2 uppercase">Europa</p>
            </div>
            <div>
              <p className="text-accent-faded">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
                nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                mattis vel, nisi.
              </p>
            </div>
          </Flow>
        </div>
      </section>

      <section id="interactive-elements">
        <h2 className="numbered-title">
          <span>02</span>interactive elements
        </h2>
        {/* Navigation */}
        <Flow spacing="4.6875rem">
          <Flow spacing="2rem">
            <nav>
              <ul
                className="fs-300 ff-sans-cond letter-spacing-2 text-white uppercase flex underline-indicators primary-navigation"
                style={{ justifyContent: "center" }}
              >
                <li className="active">
                  <a href="#">
                    <span>00</span> active
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>01</span> hovered
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>02</span> idle
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="ff-sans-normal fs-400 text-accent" style={{ textAlign: "center" }}>
              Different States of Navigation Bar
            </h3>
          </Flow>
          <div className="flex">
            {/* Explore button */}
            <Flow spacing="5.75rem" style={{ flexBasis: "100%", textAlign: "center" }}>
              <Flow spacing="0.8125rem">
                <a
                  href="#"
                  className="ff-serif fs-600 uppercase text-dark bg-white letter-spacing-3 large-button--idle"
                >
                  Explore
                </a>
                <h3 className="fs-400 ff-sans-normal text-accent">Landing Page Main Button - Idle</h3>
              </Flow>

              <Flow spacing="5.25rem">
                <a href="#" className="ff-serif fs-600 uppercase text-dark bg-white letter-spacing-3 large-button">
                  Explore
                </a>
                <h3 className="fs-400 ff-sans-normal text-accent">Landing Page Main Button - Hover</h3>
              </Flow>
            </Flow>
            <Flow spacing="4.75rem" style={{ flexBasis: "100%" }}>
              {/* Tabs */}
              <Flow spacing="1.5rem" style={{ textAlign: "center" }}>
                <div
                  className="ff-sans-cond fs-300 letter-spacing-2 text-accent uppercase flex underline-indicators tab-list"
                  style={{ justifyContent: "center" }}
                >
                  <button aria-selected="true">Moon</button>
                  <button aria-selected="false">Mars</button>
                  <button aria-selected="false">Europa</button>
                </div>
                <h3 className="fs-400 ff-sans-normal text-accent">Tabs (Active, Hover, & Idle)</h3>
              </Flow>
              {/* Dots */}
              <Flow style={{ textAlign: "center" }}>
                <div className="dot-indicators flex" style={{ justifyContent: "center" }}>
                  <button aria-selected="true">
                    <span className="sr-only">Slide title</span>
                  </button>
                  <button aria-selected="false">
                    <span className="sr-only">Slide title</span>
                  </button>
                  <button aria-selected="false">
                    <span className="sr-only">Slide title</span>
                  </button>
                </div>
                <h3 className="fs-400 ff-sans-normal text-accent">Slider 1 States (Active, Hover, & Idle)</h3>
              </Flow>
              {/* Numbers */}
              <Flow style={{ textAlign: "center" }}>
                <div
                  className="ff-serif fs-600 flex number-indicators"
                  style={{ flexDirection: "column", alignItems: "center" }}
                >
                  <button aria-selected="true">
                    <span className="sr-only">Slide</span>
                    <span>1</span>
                  </button>
                  <button aria-selected="false">
                    <span className="sr-only">Slide</span>
                    <span>2</span>
                  </button>
                  <button aria-selected="false">
                    <span className="sr-only">Slide</span>
                    <span>3</span>
                  </button>
                </div>
                <h3 className="fs-400 ff-sans-normal text-accent">Slider 2 States (Active, Hover, & Idle)</h3>
              </Flow>
            </Flow>
          </div>
        </Flow>
      </section>
    </div>
  );
}
