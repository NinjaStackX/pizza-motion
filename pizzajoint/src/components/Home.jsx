import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { slideUp } from "../utils/variants";

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ y: "-100vh" }}
      animate={{ y: 50 }}
    >
      <h2>Welcome to Pizza Joint</h2>
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
