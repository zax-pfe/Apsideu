"use client";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../../styles/works/works.css";
// import WorkItem from "./WorkItem";
import WorkItem from "./WorkItem";
import { categoriesList } from "@/app/data/categories";

export default function Works() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const works = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <motion.div style={{ y: works }} className="works-container" ref={ref}>
      <div className="works-header">
        <h1>Personal achievements</h1>
        <div className="bar"></div>
      </div>
      <div className="workitems-container">
        {categoriesList.map((category, i) => (
          <WorkItem
            key={i}
            name={category.name}
            description={category.description}
            src={category.src}
          />
        ))}
      </div>
    </motion.div>
  );
}
