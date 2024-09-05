"use client";
import "../../styles/works/workpagegallery.css";
import VerticalText from "@/components/Works/VerticalText";
import Link from "next/link";
import { nuitImages } from "../data/nuit";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Carousel from "@/components/Works/Carousel";
import WorkPageItem from "@/components/Works/WorkPageItem";

interface WorksPageProps {
  params: {
    id: string;
  };
}

const modalVariant = {
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    // y: 100,
    transition: {
      duration: 0.2,
    },
  },
};

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
  const [activeModal, setActiveModal] = useState(0);

  return (
    <div className="workpage">
      <AnimatePresence>
        {activeModal !== 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariant}
            className="modal-overlay"
          >
            <Carousel setActiveModal={setActiveModal} pictureId={activeModal} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="workpage-header">
        <h1>{workpage_id}</h1>
      </div>
      <div className="workpage-content">
        <div className="workpage-navbar">
          <div className="navbar-bar small"></div>
          <Link legacyBehavior={false} href="/">
            <div className="navbar-text">
              <VerticalText>back to home</VerticalText>
            </div>
          </Link>
          <div className="navbar-bar large"></div>
        </div>
        <div className="workpage-images">
          {nuitImages.map((item, i) => (
            <WorkPageItem
              key={i}
              id={i}
              src={item.src}
              name={item.name}
              model={item.model}
              setActiveModal={setActiveModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
