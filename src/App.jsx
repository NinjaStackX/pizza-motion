import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings.jsx";
import Order from "./components/Order";
import { motion, AnimatePresence } from "motion/react";

import Modal from "./components/Modal";
import { slideUp } from "./utils/variants.jsx";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  const [tit, setTit] = useState(false);
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order setShowModal={setTit} pizza={pizza} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
      {/* <motion.button
        variants={slideUp}
        whileHover="hover"
        initial="hidden"
        animate="animate"
        onClick={() => setTit((p) => !p)}
      >
        Modal
      </motion.button> */}
      <AnimatePresence mode="wait">
        {tit && <Modal setModal={setTit} />}
      </AnimatePresence>
    </>
  );
}

export default App;
