import Image from "next/image";
import classes from "./hero.module.css";


/**
 * It returns a section element with a class name of hero, a div element with a class name of image, an
 * image element with a source of /images/site/dev.jpeg, an alt attribute of an image of a developer, a
 * width of 300 and a height of 300, an h1 element with the text Hi, I am Felix, and a p element with
 * the text I blog about web development - especially frontend frameworks like Angular or React...
 * @returns A React component
 */
function Hero() {
  
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/dev.jpeg" alt="an image of a developer" width={300} height={300}/>
      </div>
      <h1>Hi, I am Felix</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React...
      </p>
    </section>
  );
}

export default Hero;
