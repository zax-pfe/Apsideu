import { StaticImageData } from "next/image";
import "../../styles/works/workitem.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface drawerProps {
  src: StaticImageData;
  name: string;
  description: string;
}

const workItemVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function WorkItem(props: drawerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={workItemVariant}
      className="item-container"
    >
      <div className="item-image">
        <div className="image-container">
          <Image src={props.src} alt={props.name} fill={true} />
        </div>
      </div>
      <div className="item-description">
        <h1 className="name">{props.name}</h1>
        <p className="description">{props.description}</p>
      </div>
    </motion.div>
  );
}
