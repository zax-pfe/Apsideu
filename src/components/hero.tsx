"use client";
import "../styles/hero.css";
import Image from "next/image";
// import HeroImage from "../../public/images/home/Photo page d'accueil.jpg";
import type { StaticImageData } from "next/image";
import Background from "./background";
import Navbar from "./navbar";

import { useState, useEffect } from "react";

interface HeroPorps {
  imgData: StaticImageData;
  imgAlt: string;
}

export default function Hero(props: HeroPorps) {
  const [activeHero, setActiveHero] = useState(0);
  const [blackLayerAnimation, setBlackLayerAnimation] = useState("");

  let isUnmounted = false;

  useEffect(() => {
    if (!isUnmounted) {
      console.log("ok");
      setBlackLayerAnimation("fade-out");
      console.log(`fade : ${blackLayerAnimation}`);
      setTimeout(() => setBlackLayerAnimation("faded"), 500);
    }
    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <div>
      <Image
        className="-z-10 "
        src={props.imgData}
        alt={props.imgAlt}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={`full-viewport-section ${blackLayerAnimation}`}></div>
    </div>
  );
}
