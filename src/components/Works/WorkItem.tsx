import { StaticImageData } from "next/image";
import "../../styles/works/workitem.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface drawerProps {
  src: StaticImageData;
  name: string;
  description: string;
}

const workItemImageVariant = {
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

const workItemDescriptionVariant = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const hoverVariant = {
  hover: {
    x: 15,
    transition: { duration: 0.2 },
  },
  normal: {
    x: 0,
    transition: { duration: 0.2 },
  },
};

export default function WorkItem(props: drawerProps) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${props.name}`);
  };

  return (
    <div className="item-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={workItemImageVariant}
        className="item-image"
      >
        <div className="image-container-workitem">
          <Image src={props.src} alt={props.name} fill={true} />
        </div>
      </motion.div>
      <div className="item-description">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={workItemDescriptionVariant}
          className="item-description-container"
        >
          <div className="name-description">
            <h1 className="name">{props.name}</h1>
            <p className="description">{props.description}</p>
          </div>
          <div className="discover-button">
            <motion.div
              className="flex items-center"
              animate={hoverStatus ? "hover" : "normal"}
              variants={hoverVariant}
              onHoverStart={() => setHoverStatus(true)}
              onHoverEnd={() => setHoverStatus(false)}
            >
              {/* <Link href={`/${props.name}`} scroll={false}>
                discover
              </Link> */}
              <div onClick={handleClick}>discover</div>

              <HiOutlineArrowSmRight color="white" scale={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
