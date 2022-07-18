import { Link, React } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div className="hero">
        <span className="hero-text">
          <span className="hero-heading">Watch </span>
          <span className="hero-para"> Videos and take notes </span>
          <span className="hero-para2">
            Gamify your learning.
            <Link to="explore">
              <button className="btn btn-success">Explore </button>
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Hero;
