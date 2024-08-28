"use client";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../styles/works.css";

export default function Works() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const works = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <motion.div style={{ y: works }} className="works-container" ref={ref}>
      galakoko
    </motion.div>
  );
}
