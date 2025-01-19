"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../../styles/achievements/achievements.css";
import "../../styles/achievements/achievementElement.css";
// import AchievementElement from "./AchievementElement";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { achievementslist } from "@/app/data/achievements";

export default function Achievements() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 0.75], ["0%", "-58%"]);

  return (
    <div className="achievements-container" ref={ref}>
      <div className="sticky-container">
        <div className="bar-achievement-container">
          <span />
        </div>

        <div className="content-container">
          <div className="pre-text">
            <h1>Achievement</h1>
          </div>
          <motion.div className="scroller-container" style={{ x: x }}>
            {achievementslist.map((elemnt, index) => (
              <div key={index} className="scroller-element">
                {/* <p>{elemnt.name}</p> */}
                <AchievementElement src={elemnt.src} name={elemnt.name} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface AchievementElementProps {
  src: StaticImageData;
  name: string;
}

function AchievementElement(props: AchievementElementProps) {
  return (
    <div className="achievement-element">
      <div className="achievement-element-image-container">
        <Image
          src={props.src}
          alt="achievement"
          fill={true}
          className="achievement-image"
        />

        <div className="voile-blanc" />
      </div>
      <div className="achievement-element-footer-container">
        <span />
        <div className="achievement-element-text-container">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
}
