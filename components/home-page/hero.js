import Image from "next/image";
import classes from "./hero.module.css";
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
