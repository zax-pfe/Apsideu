"use client";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../../styles/works/works.css";
// import WorkItem from "./WorkItem";
import WorkItem from "./WorkItem";
import { workslist } from "@/app/data/works";

const appear = {
  hidden: {
    opacity: 0,
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Works() {
  const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "start start"],
  // });

  // const works = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    // <motion.div style={{ y: works }} className="works-container test" ref={ref}>
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      variants={appear}
    >
      <motion.div className="works-container" ref={ref}>
        <div className="works-header">
          <h1>Works</h1>
          <div className="bar"></div>
        </div>
        <div className="workitems-container">
          {workslist.map((category, i) => (
            <WorkItem
              key={i}
              name={category.name}
              description={category.description}
              src={category.src}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
