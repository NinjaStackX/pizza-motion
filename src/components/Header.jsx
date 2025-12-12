import React from "react";
import { motion } from "motion/react";
import { pathVariants, slideUp, svgVariants } from "../utils/variants";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          drag
          dragElastic={0.7}
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          variants={svgVariants}
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <div className="title">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ fontSize: "50px", y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          Pizza Joint
        </motion.h1>
      </div>
    </header>
  );
};

export default Header;
