"use client";
import "../styles/hero.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.61, 1, 0.88, 1] },
  },
};

interface HeroPorps {
  imgData: StaticImageData;
}

export default function Hero(props: HeroPorps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const maximedespiau = useTransform(scrollYProgress, [0, 1], [60, -120]);

  return (
    <div className="hero-container" ref={ref}>
      <motion.div initial="hidden" animate="visible" variants={imageVariant}>
        <Image src={props.imgData} alt="background" fill={true}></Image>
      </motion.div>
      <div className="hero-content">
        <div className="header">
          <div className="header-content">
            <div className="item">professional photographer</div>
            <div className="bar" />
            <div className="item"> based in brussels</div>
          </div>
          <div className="header-menu">
            <IoIosMenu size={35} />
          </div>
        </div>
        <motion.div style={{ y: maximedespiau }} className="footer">
          MAXIME DESPIAU
        </motion.div>
      </div>
    </div>
  );
}
