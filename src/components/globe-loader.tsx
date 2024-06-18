import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  loading: boolean;
  loadingPercentage?: number;
  hasPageCompletedLoading?: boolean;
};

const GlobeLoader = (props: Props) => {
  const { className, loading, loadingPercentage, hasPageCompletedLoading } =
    props;
  return (
    <motion.div
      initial={{ zIndex: 20 }}
      animate={
        hasPageCompletedLoading && {
          zIndex: 0,
          backgroundColor: ``,
          opacity: 0,
          display: "none",
          transition: {
            ease: "linear",
            duration: 0.5,
            delay: 1,
          },
        }
      }
      className={` border-2 opacity-100 bg-white fixed top-0 left-0 h-full w-full flex flex-row items-center justify-center`}
    >
      <div
        className={`border relative bg-white  w-44 h-44 md:w-60 md:h-60 lg:w-full lg:h-full ${className}`}
      >
        <motion.p
          initial={{ opacity: 0.1 }}
          animate={hasPageCompletedLoading ? { opacity: 0 } : { opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 6 }}
          className="text-black text-4xl md:text-5xl lg:text-[15rem] font-medium font-cabinetgrotesk absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:left-0 md:bottom-0 md:-translate-x-0 md:-translate-y-0"
        >
          {loadingPercentage}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default GlobeLoader;
