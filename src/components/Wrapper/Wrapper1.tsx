"use client";

import Works from "../Works/Works";
import Wrapper2 from "./Wrapper2";
import "../../styles/wrappers/wrapper.css";
import { useState, useEffect, useRef } from "react";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Wrapper1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const y_wrapper_1 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <motion.div className="wrapper-1" ref={ref} style={{ y: y_wrapper_1 }}>
      <Works />
      <Wrapper2 />
    </motion.div>
  );
}
