import { motion } from "framer-motion";
import "../../styles/contact/marquee.css";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marqueeAnimation = {
    x: ["0%", "-100%"],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <Marquee
      className="marquee-container"
      speed={300}
      gradient={true}
      gradientColor={"black"}
      gradientWidth={400}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="marquee-text-container">
          <span key={i} className="marquee-element">
            Contact
          </span>
          <span className="marquee-element">Me</span>
        </div>
      ))}
    </Marquee>

    // <div className="marquee-container">
    //   <motion.div className="marquee-track" animate={marqueeAnimation}>
    //     {[...Array(3)].map((_, i) => (
    //       <span key={i} className="marquee-element">
    //         Maxime Despiau
    //       </span>
    //     ))}
    //     {[...Array(3)].map((_, i) => (
    //       <span key={`duplicate-${i}`} className="marquee-element">
    //         Maxime Despiau
    //       </span>
    //     ))}
    //   </motion.div>
    // </div>
  );
}
