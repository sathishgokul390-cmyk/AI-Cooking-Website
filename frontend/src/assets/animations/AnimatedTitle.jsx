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
      <div className="pan-loader">
        <div className="pan"></div>
        <div className="handle"></div>
        <div className="flame"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="title"
      >
        AI_Cooking_Website
      </motion.h1>
    </div>
  );
}

export default AnimatedTitle;