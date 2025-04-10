import { color, motion } from "framer-motion";

export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

const NavgatingContainer = ({ changebackground }) => {
  return (
    <>
      <motion.div
        className="navitgatingContainer"
        initial={"hidden"}
        animate={"visible"}
        style={{
          backgroundColor: changebackground === true ? "black" : "white",
        }}
      >
        <div className="nav1">
          <motion.h1
            variants={slideInFromLeft(0.2)}
            style={{
              color: changebackground === true ? "white" : "black",
            }}
          >
            Navigating the Four Pivots of Credit Assessment
          </motion.h1>
          <motion.h4
            variants={slideInFromLeft(0.7)}
            style={{
              color: changebackground === true ? "white" : "black",
            }}
          >
            A Compass for Company Founders
          </motion.h4>
          <motion.div
            className="description"
            variants={slideInFromLeft(1)}
            style={{
              color: changebackground === true ? "white" : "black",
            }}
          >
            In the vast ocean of business, understanding the undercurrents of
            credit assessment can be your lighthouse, guiding you safely to the
            shores of growth and opportunity. At the heart of this voyage are
            the four pivotal assessments: Credit Bureau Analysis, Financial
            Analysis, GST Analysis, and Banking Analysis.
          </motion.div>
        </div>
        <motion.div
          className="nav2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <video src="public\uffhnbd.mp4" loop autoPlay muted>
            this is the video
          </video>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavgatingContainer;
