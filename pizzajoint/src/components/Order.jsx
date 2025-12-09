import React from "react";
import { childVariants, containerVariantsOrders } from "../utils/variants";

import { motion } from "motion/react";
const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariantsOrders}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
