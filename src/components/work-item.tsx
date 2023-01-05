import React from "react";
import ImageContainer from "./image-container";
import { motion } from "framer-motion";

type Props = {
	id?: number | string;
	name: string;
	href?: string;
	detail?: string;
	image?: string;
};

const WorkItem = (props: Props) => {

	const { name, detail, href, id, image } = props;

	const workItemVariant = {
		hidden: {
			x: "100%",
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
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
			variants={workItemVariant}
			className="flex flex-col-reverse items-start text-start justify-start gap-y-10 relative font-cabinetgrotesk"
		>
			{/* w-[23rem] sm:w-[28rem] md:w-[32rem] h-[23rem] sm:h-[28rem] md: */}
			<div className="w-full max-w-[32rem]">
				<ImageContainer
					imageLink={`${image}`}
					className={
						"h-[340px] md:w-[32rem] rounded-xl blur-none md:blur-sm opacity-80"
					}
				/>
			</div>
			<div className="relative md:absolute md:-left-36 lg:-left-56 md:top-5 text-4xl sm:text-5xl font-semibold bg-gradient-to-l from-zinc-900 to-gray-100 bg-clip-text text-transparent w-full max-w-[70%] sm:max-w-full">
				<p>{name}</p>
			</div>
			<div className="hidden md:block relative md:absolute top-5 -right-60 w-full max-w-xs text-lg font-normal bg-gradient-to-r from-zinc-900 to-gray-100 bg-clip-text text-transparent">
				<p>{detail}</p>
			</div>
		</motion.div>
	);
};

export default WorkItem;
