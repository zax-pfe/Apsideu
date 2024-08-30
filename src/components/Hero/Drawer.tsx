"use client";
import { SetStateAction, Dispatch, useState } from "react";
import "../../styles/hero/drawer.css";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import HomeImageDorian from "../../../public/images/catalogue/Nuit/heroImage.jpg";
import HomeImageMiss from "../../../public/images/home/HomeImage1.jpg";
import { motion } from "framer-motion";

const menuItem = [
  {
    title: "work",
    src: HomeImageDorian,
  },
  {
    title: "prestation",
    src: HomeImageMiss,
  },
  {
    title: "about",
    src: HomeImageDorian,
  },
  {
    title: "contact",
    src: HomeImageMiss,
  },
];

const overVariant = {
  normal: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: [0.61, 1, 0.88, 1],
    },
  },

  hover: {
    x: -10,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

const imageVariant = {
  hidden: {
    y: "-50vh",
  },
  visible: {
    y: "-100vh",
    transition: { duration: 0.5, delay: 0.6 },
  },
};

const titleAnimation = {
  hidden: {
    y: 100,
    transition: { duration: 0.3, delay: 0.4 },
  },
  visible: {
    y: 0,
    transition: { duration: 0.3, delay: 0.4 },
  },
};

interface drawerProps {
  setActiveDrawer: Dispatch<SetStateAction<boolean>>;
  activeDrawer: boolean;
}
export default function Drawer(props: drawerProps) {
  const [activeHover, setActiveHover] = useState(0);
  const [hoverStatus, setHoverStatus] = useState(-1);

  function handleClick() {
    props.setActiveDrawer(false);
  }

  function action(i: number) {
    setActiveHover(i);
    setHoverStatus(i);
  }
  return (
    <div className="drawer-container">
      <div className="drawer-header">
        {/* <div onClick={() => handleClick()}>ok</div> */}
        <div className="icon-container">
          <IoMdClose
            className="cursor-pointer"
            onClick={() => handleClick()}
            color="white"
            size={35}
          />
        </div>
      </div>
      <div className="drawer-content ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          className="drawer-image "
        >
          <Image src={menuItem[activeHover].src} alt="hover" />
          {/* <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="image-screen"
          /> */}
        </motion.div>
        <div className="drawer-menu">
          {menuItem.map((item, i) => (
            <div key={i} className="drawer-item">
              <motion.h1
                className="cursor-pointer"
                variants={overVariant}
                animate={hoverStatus === i ? "hover" : "normal"}
                onMouseOver={() => action(i)}
                onMouseOut={() => setHoverStatus(-1)}
              >
                <div className="title-animation">
                  <motion.h1
                    variants={titleAnimation}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.title}
                  </motion.h1>
                </div>
              </motion.h1>
            </div>
          ))}
        </div>
      </div>
      <div className="drawer-footer ">
        <div className="footer-elements"></div>
      </div>
    </div>
  );
}
