"use client";
import "../../styles/works/workpage.css";
import VerticalText from "@/components/Works/VerticalText";
import Link from "next/link";
import { nuitImages } from "../data/nuit";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { motion } from "framer-motion";

interface WorksPageProps {
  params: {
    id: string;
  };
}

const ImageVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },

  hidden: {
    y: 50,
    opacity: 0,
  },
};

const WrapperVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.5 },
  },

  hidden: {
    y: 50,
    opacity: 0,
  },
};

export default function Page(props: WorksPageProps) {
  const workpage_id = props.params.id;

  return (
    <div className="workpage">
      <div className="workpage-header">
        <h1>{workpage_id}</h1>
      </div>
      <div className="workpage-content">
        <div className="workpage-navbar">
          <div className="navbar-bar small"></div>
          <Link legacyBehavior={true} href="/">
            <div className="navbar-text">
              <VerticalText>back to home</VerticalText>
            </div>
          </Link>
          <div className="navbar-bar large"></div>
        </div>
        <div className="workpage-images">
          {nuitImages.map((item, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={WrapperVariants}
              viewport={{ once: true, amount: 0.3 }}
              key={i}
              className="workpage-image-container"
            >
              <motion.div variants={ImageVariants} className="workpage-image">
                <Image src={item.src} alt={item.name} fill={true} />
              </motion.div>
              <motion.div
                variants={ImageVariants}
                className="workpage-description"
              >
                <div className="description-container">
                  <p>Model: {item.model}</p>
                  <p>Name: {item.name}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
