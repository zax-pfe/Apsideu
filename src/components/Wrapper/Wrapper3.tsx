"use client";
import About from "../about/About";
import { useState, useEffect, useRef } from "react";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import "../../styles/wrappers/wrapper.css";
import Contact from "../contact/contact";
import Static_contact from "../contact/contact_static";
import Logo from "../contact/logo";

export default function Wrapper3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.8", "start start"],
  });
  const y_wrapper_1 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <motion.div className="wrapper-3" ref={ref} style={{ y: y_wrapper_1 }}>
      <About />
    </motion.div>
  );
}
