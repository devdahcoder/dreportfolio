import { AnimationControls, TargetAndTransition, VariantLabels, motion } from "framer-motion";
import React from "react";

type Props = {
	text?: string;
	index?: number;
	containerClassName?: string;
	className?: string;
	children?: React.ReactNode;
	delay?: number | undefined;
	isLoaded?: boolean;
	animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition | undefined
};

const HeroText = (props: Props) => {
	const {
		index,
		text,
		className,
		containerClassName,
		children,
		delay,
		isLoaded,
	} = props;
	const textContext = {
		hidden: {
			y: "100%",
			opacity: 0,
		},
		visible: (index: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: index * (delay ?? 0.03),
				ease: "easeInOut",
			},
		}),
	};

	return (
		<>
			<div
				className={`overflow-hidden flex flex-row items-center ${containerClassName}`}
			>
				<motion.div
					custom={index}
					variants={textContext}
					initial="hidden"
					animate={isLoaded && "visible"}
					viewport={{ once: true }}
					className={`text-white ${className}`}
				>
					{text}
					{children}
				</motion.div>
			</div>
		</>
	);
};

export default HeroText;
