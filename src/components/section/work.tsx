import React from "react";
import WorkList from "../work-list";
import { motion } from "framer-motion";

type Props = {};

const Work = (props: Props) => {
	return (
    <motion.section id={`works`} className={`py-28`}>
        <div
            className={`w-11/12 md:w-[90%] mt-0 mx-auto flex flex-col  gap-y-16 md:gap-y-24 !px-3`}
        >
            <div
                className="text-start flex flex-row items-start w-full  font-semibold font-untitled text-3xl md:text-4xl text-[#ADB0AD]">
                <p>Selected Works</p>
            </div>
            <WorkList />
        </div>
    </motion.section>
    );
};

export default Work;
