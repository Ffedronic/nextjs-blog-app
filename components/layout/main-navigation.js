import Logo from "./logo";
import Link from "next/link";
import classes from "./main-navigation.module.css"


/**
 * It returns a header element with a link to the homepage, a logo, a nav element with a list of links
 * to posts and contact pages.
 * @returns A header with a logo and a nav with two links.
 */
function MainNavigation() {
  
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">
            Posts
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
