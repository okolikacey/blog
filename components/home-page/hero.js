import Image from "next/image";
import classes from "../../styles/home-page/hero.module.css";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/kacey.jpg" alt="An image showing kacey" width={300} height={300} />
      </div>
      <h1>Hi, I'm Kacey</h1>
      <p> I am a MERN Stack web developer using frontend frameworks like React.</p>
    </section>
  );
}

export default Hero;
