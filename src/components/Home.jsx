import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { containerVariants, slideUp } from "../utils/variants";
import { useState } from "react";

const Home = () => {
  const [tit, setTit] = useState(true);
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial={{ y: "-100vh" }}
      animate={{ y: 50 }}
      exit="exit"
    >
      <AnimatePresence>
        {tit && (
          <motion.h2 exit={{ x: -1000 }}>Welcome to Pizza Joint</motion.h2>
        )}
      </AnimatePresence>
      <motion.button
        variants={slideUp}
        whileHover="hover"
        initial="hidden"
        animate="animate"
        onClick={() => setTit(false)}
      >
        hide
      </motion.button>
      <Link to="/base">
        <motion.button
          variants={slideUp}
          whileHover="hover"
          initial="hidden"
          animate="animate"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
