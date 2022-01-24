import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/router";

const LINKS = [
  {
    href: "/",
    text: "00 Home",
  },
  {
    href: "/destination",
    text: "01 Destination",
  },
  {
    href: "/crew",
    text: "02 Crew",
  },
  {
    href: "/technology",
    text: "03 Technology",
  },
];

export default function MainNavigation() {
  const { pathname } = useRouter();

  const [isVisible, setIsVisible] = React.useState(false);

  function handleMobileNavToggle() {
    setIsVisible(prevState => !prevState);
  }

  return (
    <>
      <button
        aria-expanded={isVisible}
        className="mobile-nav-toggle"
        onClick={handleMobileNavToggle}
        aria-controls="primary-navigation"
      >
        <span className="sr-only">Main navigation</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible={isVisible}
          className="fs-300 ff-sans-cond letter-spacing-2 text-white uppercase flex underline-indicators primary-navigation"
        >
          {LINKS.map(({ href, text }) => (
            <li key={href} className={pathname === href ? "active" : undefined}>
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
