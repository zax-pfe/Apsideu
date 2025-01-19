"use client";

import Hero from "@/components/Hero/hero";
import "../styles/page.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Wrapper1 from "@/components/Wrapper/Wrapper1";
import Marquee from "@/components/contact/marquee";

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
      <Wrapper1 />
      <div className="footer-page">
        <Marquee />
      </div>
    </motion.div>
  );
}
