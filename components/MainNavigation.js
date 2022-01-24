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

  const [isOpen, setIsOpen] = React.useState(false);

  function handleMobileNavToggle() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <>
      <button
        onClick={handleMobileNavToggle}
        aria-controls="primary-navigation"
        className={`mobile-nav-toggle${isOpen ? " open" : ""}`}
      >
        <span className="sr-only" aria-expanded={isOpen}>
          Main navigation
        </span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          className={`fs-300 ff-sans-cond letter-spacing-2 text-white uppercase flex underline-indicators primary-navigation${
            isOpen ? " open" : ""
          }`}
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
