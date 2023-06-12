import { motion } from "framer-motion";
import ChatterLogo from "../components/ChatterLogo";
import FeedItemContainer from "../components/FeedItemContainer";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <motion.main
      className="disp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <section className="sect">
        <ChatterLogo />
        <Link to="login" ><button className="btn">Login</button></Link>
        <h1># Welcome to Chatter</h1>
        <p>Secure, Reliable, Intuitive</p>
      </section>
      <section className="sect">
        <h3>About Chatter</h3>
        <article>
          Chatter is a Medium/Hashnode Clone web app, created to ease the
          transmission of datat across the internert
        </article>
      </section>
      <section className="sect">
        <h3>Testimonies</h3>
        <div>
          <div>
            <ChatterLogo />
            <div>
              <h5>Ada Lovelace</h5>
              <p>Pioneer Programmer</p>
            </div>
          </div>
          <p>Such a wonder in an app</p>
        </div>
      </section>
      <section className="sect">
        <h2>Trending</h2>
        <FeedItemContainer />
      </section>
    </motion.main>
  );
}

export default Landing;
