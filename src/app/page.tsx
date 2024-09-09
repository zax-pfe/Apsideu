"use client";

import Hero from "@/components/Hero/hero";
import "../styles/page.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Works from "@/components/Works/Works";

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
      <Hero />

      <Works />
      {/* <div className="section" /> */}
    </div>
  );
}
