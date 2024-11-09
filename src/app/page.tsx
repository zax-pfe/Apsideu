"use client";

import Hero from "@/components/Hero/hero";
import "../styles/page.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Works from "@/components/Works/Works";
import Achievements from "@/components/Achievements/Achievement";
import AchievementsWrapper from "@/components/Achievements/achievements_wrapper";
// import About from "@/components/about/About";
import AboutWrapper from "@/components/about/About_wrapper";
import { motion } from "framer-motion";

const appear = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.7 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      variants={appear}
    >
      <Hero />
      <Works />
      <AchievementsWrapper />
      <AboutWrapper />
    </motion.div>
  );
}
