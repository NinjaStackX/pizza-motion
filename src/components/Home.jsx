import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useCycle } from "motion/react";
import { containerVariants, loaderVariants, slideUp } from "../utils/variants";
import Loader from "./Loader";

const Home = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
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
      <Loader direction={animation} />

      <button
        style={{
          fontSize: "16px",
        }}
        onClick={() => cycleAnimation()}
      >
        change Animation
      </button>
    </motion.div>
  );
};

export default Home;
