import { motion } from "framer-motion";
import React from "react";

type Props = { text: string; index: number };

const HeroText = (props: Props) => {
	const { index, text } = props;
	const textContext = {
		hidden: {
			y: "100%",
			opacity: 0,
		},
		visible: (index: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.1,
				delay: index * 0.1,
				ease: "linear",
			},
		}),
	};

	return (
		<>
			<div className={`overflow-hidden flex flex-row items-center`}>
				<motion.div
					custom={index}
					variants={textContext}
					className="text-white"
				>
					{text}
				</motion.div>
			</div>
		</>
	);
};

export default HeroText;
