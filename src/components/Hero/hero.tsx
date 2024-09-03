"use client";
import "../../styles/hero/hero.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { HeroImageList } from "@/app/data/heroImages";
import { IoIosMenu } from "react-icons/io";
import Drawer from "./Drawer";
import {
  motion,
  useScroll,
  MotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef, SetStateAction, Dispatch } from "react";

const imageVariant = {
  hidden: {
    opacity: 0,
    size: 0.8,
    transition: { duration: 0.7, ease: [0.61, 1, 0.88, 1] },
  },
  visible: {
    opacity: 1,
    size: 1,
    transition: { duration: 0.7, ease: [0.61, 1, 0.88, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const [activeHero, setActiveHero] = useState(0);

  const [activeDrawer, setActiveDrawer] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const maximedespiau = useTransform(scrollYProgress, [0, 1], [60, -120]);

  function handleClick() {
    setActiveDrawer(true);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`active hero ${activeHero}`);
      console.log(`HeroImageList.length ${HeroImageList.length}`);
      setActiveHero((prev) =>
        prev < HeroImageList.length - 1 ? activeHero + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeHero]);

  return (
    <div className="hero-container" ref={ref}>
      <div className="hero-image-wrapper">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeHero}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariant}
          >
            <Image
              src={HeroImageList[activeHero]}
              alt="background"
              fill={true}
            ></Image>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-content">
        <div className="header">
          <div className="header-content">
            <div className="item">professional photographer</div>
            <div className="bar" />
            <div className="item"> based in brussels</div>
          </div>
          <motion.div
            animate={{ opacity: activeDrawer ? 0 : 1 }}
            className="header-menu"
            onClick={() => handleClick()}
          >
            <IoIosMenu size={35} />
          </motion.div>
        </div>
        <motion.div style={{ y: maximedespiau }} className="footer">
          MAXIME DESPIAU
        </motion.div>
      </div>

      <AnimatePresence>
        {activeDrawer && (
          <motion.div
            initial={{ opacity: 1, x: "100vw" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
            }}
            exit={{
              opacity: 1,
              x: "100vw",
              transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
            }}
          >
            <Drawer
              setActiveDrawer={setActiveDrawer}
              activeDrawer={activeDrawer}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
