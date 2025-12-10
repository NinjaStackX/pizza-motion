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
        console.log("parent");
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
          console.log("child");
        }}
      >
        <h2>Hi I'm Modal</h2>
        <p>محتوى المودال هون</p>
        <Link to="/">
          <button onClick={() => setModal(false)}>Try Again!</button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
