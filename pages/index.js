export default function Home() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className="fs-300 ff-sans-cond letter-spacing-2 text-white uppercase flex underline-indicators primary-navigation">
            <li>
              <a href="#">00 Home</a>
            </li>
            <li>
              <a href="#">01 Destination</a>
            </li>
            <li>
              <a href="#">02 Crew</a>
            </li>
            <li>
              <a href="#">03 Technology</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex" style={{ justifyContent: "space-around" }}>
          <article style={{ flexBasis: 0 }}>
            <p className="ff-sans-cond fs-500 uppercase letter-spacing-1 text-accent">So, you want to travel to</p>
            <p className="ff-serif fs-900 uppercase" style={{ lineHeight: 1.146 }}>
              Space
            </p>
            <p className="ff-sans-normal fs-400 text-accent">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
              kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </article>
          <button
            className="ff-serif fs-600 uppercase text-dark bg-white letter-spacing-3 large-button"
            style={{ flexBasis: 0 }}
          >
            Explore
          </button>
        </section>
      </main>
    </div>
  );
}
