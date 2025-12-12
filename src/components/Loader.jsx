import React from "react";
import { motion } from "motion/react";
import { loaderVariants } from "../utils/variants";
const Loader = ({ direction }) => {
  return (
    <motion.div
      drag
      // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      variants={loaderVariants}
      animate={direction}
      className="loader"
    ></motion.div>
  );
};

export default Loader;
