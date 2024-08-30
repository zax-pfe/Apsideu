"use client";

import Hero from "@/components/Hero/hero";
import HomeImageDorian from "../../public/images/catalogue/Nuit/heroImage.jpg";
import HomeImageMiss from "../../public/images/home/HomeImage1.jpg";
import "../styles/page.css";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import Works from "@/components/Works/Works";
import { AnimatePresence, motion } from "framer-motion";
import Drawer from "@/components/Hero/Drawer";

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
    <div className="page">
      <Hero imgData={HomeImageMiss} />

      <Works />
      <div className="section" />
    </div>
  );
}
