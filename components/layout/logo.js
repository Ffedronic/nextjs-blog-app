import classes from "./logo.module.css"

/**
 * It returns a div with the className of logo
 * @returns A div with the className of logo.
 */
function Logo() {
  return <div className={classes.logo}>Felix Next Blog</div>;
}

export default Logo;
