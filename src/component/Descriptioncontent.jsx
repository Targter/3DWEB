import { motion } from "framer-motion";
import { useRef } from "react";

export function slideInFromLeft(duration) {
  console.log(duration);
  return {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
}
const Descriptioncontent = ({ container}) => {
  console.log(container);
  const extracontent = useRef();

  const callfunction = () => {
    extracontent.current.style.display = "block";
  };

  const offfunction = () => {
    extracontent.current.style.display = "none";
  };
  // const duration = container.duration;
  return (
    <>
      <motion.div
        className="descard"
        onMouseEnter={callfunction}
        onMouseLeave={offfunction}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.1 }}
        variants={slideInFromLeft(container.duration)}
       
      >
        <div className="img">
          <img src={container.img1} alt="" />
        </div>
        <div className="content">{container.Description1}</div>

        <div className="extracontent" ref={extracontent}>
          {container.extracontent}
        </div>
      </motion.div>
    </>
  );
};

export default Descriptioncontent;
