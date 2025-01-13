import "../../styles/contact/contact.css";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 1000]);

  return (
    <div className="contact-container test" ref={container}>
      <motion.div style={{ y }} className="contact test">
        Contact
      </motion.div>
    </div>
  );
}
