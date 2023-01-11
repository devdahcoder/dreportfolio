import React from "react";
import { motion } from "framer-motion";

type Props = {
	index?: number;
	id?: number | string;
	text: string;
	href?: string;
	detail?: string;
};

const ExperienceItem = (props: Props) => {
	const { text, detail, href, id, index } = props;

	const experienceItemVariant = {
		hidden: {
			opacity: 0.5,
			x: "-100%",
		},
		visible: (index: number) => ({
			opacity: 1,
			x: "0",
			transition: { ease: "easeInOut", duration: index * 2.5 },
		}),
	};

	const experienceDetailVariant = {
		hidden: { opacity: 0, scale: 0 },
		visible: (index: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				ease: "easeInOut",
				duration: index * 3,
			},
		}),
	};

	return (
		<motion.li
			custom={index}
			variants={experienceItemVariant}
			className="list-none experience--li"
		>
			<div className="flex flex-col gap-y-5 experience--li--div--child w-full max-w-[90%] lg:max-w-[75%]">
				<a className="text-5xl md:text-7xl font-bold text-white">
					{text}
				</a>
				<motion.div
					custom={index}
					variants={experienceDetailVariant}
					className="font-semibold text-xl bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent"
				>
					<p>{detail}</p>
				</motion.div>
			</div>
		</motion.li>
	);
};

export default ExperienceItem;
