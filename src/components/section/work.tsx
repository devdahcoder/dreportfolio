import React from "react";
import SectionContainer from "../section-container";
import WorkList from "../work-list";
import { motion } from "framer-motion";

type Props = {};

const Work = (props: Props) => {
	return (
    <motion.section id={`works`} className={`py-28`}>
      <div
        className={`w-4/5 mt-0 mx-auto flex flex-col items-center gap-y-24 !px-3`}
      >
        <div className="text-start flex flex-row items-start w-full ">
          <div
            className="font-semibold font-untitled text-4xl text-[#ADB0AD]"
          >
            <p>Selected Works</p>
          </div>
        </div>
        <WorkList />
      </div>
    </motion.section>
  );
};

export default Work;
