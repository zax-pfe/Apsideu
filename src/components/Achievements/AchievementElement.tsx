"use client";
import { StaticImageData } from "next/image";
import "../../styles/achievements/AchievementElement.css";
import styles from "./achievementElement.module.css";

interface AchievementElementProps {
  src: StaticImageData;
  name: string;
}

export default function AchievementElement(props: AchievementElementProps) {
  return (
    <div className={styles.achievementElement}>
      <div
        className="achievement-element-image-container"
        // style={{ height: "55vh" }}
      ></div>
      <div className="achievement-element-footer-container test">
        <span />
        <p>{props.name}</p>
      </div>
    </div>
  );
}
