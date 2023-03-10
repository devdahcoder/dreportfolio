import React from "react";
import ImageContainer from "./image-container";
import { motion } from "framer-motion";
import HeroText from "./hero-text";
import ParallaxText from "./parallax-text";

type Props = {
	index?: number;
	id?: number | string;
	name: string;
	href?: string;
	detail?: string;
	image?: string;
};

const WorkItem = (props: Props) => {
	const { name, detail, href, id, image, index } = props;
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
			className="flex flex-col-reverse items-start text-start justify-start gap-y-10 relative font-cabinetgrotesk"
		>
			<div className="w-full max-w-[32rem]">
				<ImageContainer
					imageLink={`${image}`}
					className={
						"h-[340px] md:w-[32rem] rounded-xl blur-none md:blur-sm opacity-80"
					}
				/>
			</div>
			<div className="flex flex-row items-center flex-wrap gap-x-2 relative md:absolute md:-left-36 lg:-left-56 md:top-5 text-4xl sm:text-5xl font-semibold bg-gradient-to-l from-zinc-900 to-gray-100 bg-clip-text text-transparent w-full max-w-[70%] sm:max-w-full">
				{projectArrayName?.map((name: string, index: number) => (
					<ParallaxText
						key={index}
						text={name}
						index={index}
						containerClassName={"w-max"}
						delay={0.02}
					/>
				))}
			</div>
			<div className="hidden md:block relative md:absolute top-5 -right-60 w-full max-w-xs text-lg font-normal text-white">
				<p>{detail}</p>
			</div>
		</motion.div>
	);
};

export default WorkItem;
