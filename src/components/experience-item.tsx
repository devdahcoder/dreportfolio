import React from "react";
import { motion } from "framer-motion";
import HeroText from "./hero-text";

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
			transition: { ease: "easeInOut", delay: index * 0.5, duration: 0.6 },
		}),
	};

	const experienceDetailVariant = {
		hidden: { opacity: 0, scale: 0 },
		visible: (index: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				ease: "easeInOut",
				duration: 1,
				delay: index * 0.8,
			},
		}),
	};

	return (
		<motion.li
			// custom={index}
			// variants={experienceItemVariant}
			className="list-none experience--li"
		>
			<div className="flex flex-col gap-y-5 experience--li--div--child w-full max-w-[90%] lg:max-w-[75%]">
				<HeroText
					index={index}
					text={text}
					className={`text-5xl md:text-7xl font-bold text-white`}
				/>
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
