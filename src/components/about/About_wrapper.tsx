"use client";
import About from "./About";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function AboutWrapper() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <motion.div style={{ y: parallax }} ref={ref}>
      <About />
    </motion.div>
  );
}
