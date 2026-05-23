import { useEffect } from "react";
import pan from '../images/pan.png'

function AnimatedTitle({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="container">
      <div className="logo-wrapper">
        <img
          src={pan}
          alt="Cooking Logo"
          className="logo"
        />

        <div className="fill-overlay"></div>
      </div>
    </div>
  );
}

export default AnimatedTitle;