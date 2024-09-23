import { StaticImageData } from "next/image";
import "../../styles/works/workpageitem.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface WorkPageItemProps {
  src: StaticImageData;
  id: number;
  name: string;
  model: string;
  setActiveModal: Dispatch<SetStateAction<number>>;
}

const WorkPageItemVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WorkPageItem(props: WorkPageItemProps) {
  function handleClick() {
    props.setActiveModal(props.id);
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={WorkPageItemVariants}
      className="workpages-item"
    >
      <div
        className="workpage-item-image-container"
        onClick={() => handleClick()}
      >
        <Image src={props.src} alt={props.name} fill={true} />
        <div className="voile-blanc" />
      </div>
    </motion.div>
  );
}
