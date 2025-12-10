import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { containerVariants, slideUp } from "../utils/variants";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial={{ y: "-100vh" }}
      animate={{ y: 50 }}
      exit="exit"
    >
      <motion.h2 exit={{ x: -1000 }}>Welcome to Pizza Joint</motion.h2>

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
