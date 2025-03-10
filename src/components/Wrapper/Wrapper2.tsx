"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Wrapper3 from "./Wrapper3";
import "../../styles/wrappers/wrapper.css";
import Achievement from "../achievement";
export default function Wrapper2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start start"],
  });
  const y_wrapper_1 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <motion.div className="wrapper-2" ref={ref} style={{ y: y_wrapper_1 }}>
      <Achievement />
      <Wrapper3 />
    </motion.div>
  );
}
