"use client";
import "../../styles/works/workpagegallery.css";
import VerticalText from "@/components/Works/VerticalText";
import Link from "next/link";
import { nuitImages } from "../data/nuit";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "@/components/Works/Carousel";
import WorkPageItem from "@/components/Works/WorkPageItem";
import { useState, useMemo } from "react";
import { imageCollections } from "../data/works/index";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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

export default function Page(props: WorksPageProps) {
  const workpage_id = props.params.id;
  console.log(`active hero ${workpage_id}`);
  const [activeModal, setActiveModal] = useState(-1);

  const currentImages = useMemo(() => {
    return imageCollections[workpage_id] || [];
  }, [workpage_id]);

  return (
    <div className="workpage">
      <AnimatePresence>
        {activeModal !== -1 && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariant}
            className="modal-overlay"
          >
            <Carousel
              setActiveModal={setActiveModal}
              activeModal={activeModal}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="workpage-header">
        <h1>{workpage_id}</h1>
      </div>
      <div className="workpage-content">
        <div className="workpage-navbar">
          <div className="navbar-bar small"></div>
          <Link href="/" scroll={false}>
            <div className="navbar-text">
              <VerticalText>back to home</VerticalText>
            </div>
          </Link>
          <div className="navbar-bar large"></div>
        </div>
        <div className="workpage-images">
          {currentImages.map((item, i) => (
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
