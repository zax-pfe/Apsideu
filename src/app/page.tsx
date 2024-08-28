"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import HomeImageDorian from "../../public/images/catalogue/Nuit/heroImage.jpg";
import HomeImageMiss from "../../public/images/home/HomeImage1.jpg";
import Navbar from "@/components/navbar";
import "../styles/page.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Works from "@/components/Works";

export default async function Home() {
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
