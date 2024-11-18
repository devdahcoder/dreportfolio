import React from "react";
import ImageContainer from "./image-container";
import { motion } from "framer-motion";
import HeroText from "./hero-text";
import ParallaxText from "./parallax-text";
import SVGComponent from "../../icon/arrow";

type Props = {
	index?: number;
	id?: number | string;
	name: string;
	href?: string;
	caseStudy?: string;
	detail?: string;
	image?: string;
	liveLinkText?: string;
	caseStudyLinkText?: string;
};

const WorkItem = (props: Props) => {
	const { name, detail, href, id, image, index, caseStudy, liveLinkText, caseStudyLinkText } = props;
	const projectArrayName = name?.split(" ");

	const workItemVariant = {
		hidden: {
			y: "200%",
			opacity: 0,
		},
		visible: (index: number) => ({
			y: 0,
			opacity: 1,
			transition: { ease: "easeInOut", duration: 1, delay: index * 0.01 },
		}),
	};

	const imageVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
    <motion.div
      // custom={index}
      // variants={workItemVariant}
      className="flex flex-col md:flex-row items-start gap-x-13 text-start justify-start gap-y-10 relative font-untitled"
    >
      <div className="flex flex-col items-start justify-start gap-y-7 w-full ">
        <div className="flex flex-row items-start flex-wrap gap-x-5  relative text-4xl sm:text-6xl font-medium bg-gradient-to-l from-zinc-900 to-gray-100 bg-clip-text text-transparent w-full md:w-[90%]">
          {projectArrayName?.map((name: string, index: number) => (
            <ParallaxText
              key={index}
              text={name}
              index={index}
              containerClassName={"w-max underline"}
			  className={`underline`}
              delay={0.02}
            />
          ))}
			<SVGComponent />

		</div>

        <div className="relative w-full max-w-[29rem] leading-7 text-xl font-normal text-white">
          <p>{detail}</p>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-3">
          <div>
            <a
              className="text-[#F96F21] font-medium flex flex-row items-center justify-center text-xl"
              href={`https://${caseStudy}`}
              target="_blank"
              rel="noopener noreferrer"
            >
				{"Read Case Study"}
            </a>
          </div>
          <div>
            <a
              className="text-[#20FAF9] font-medium flex flex-row items-center justify-center text-xl"
              href={`https://${href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
				{`Visit ${name}`}
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[32rem]">
        <ImageContainer
          imageLink={`${image}`}
          className={"  rounded-xl opacity-80"}
		  size={"!h-[340px] !w-full md:!w-[500px] md:!h-[400px]"}
        />
      </div>
    </motion.div>
  );
};

export default WorkItem;
