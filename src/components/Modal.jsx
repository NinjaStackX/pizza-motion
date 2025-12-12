import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function Modal({ setModal }) {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        setModal(false);
      }}
    >
      <motion.div
        className="modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Hi I'm Delicious pizza</h2>
        <p> Welcome to our Kitchen </p>
        <Link to="/">
          <button onClick={() => setModal(false)}>Cook me again! </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
