import { motion } from "framer-motion";
import { useEffect } from "react";

const text = "AI_Cooking_Website";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const letterAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function AnimatedTitle({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // after 4 sec go to home page

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="container">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="title"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedTitle;