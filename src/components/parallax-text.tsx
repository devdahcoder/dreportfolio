import {
	AnimationControls,
	TargetAndTransition,
	VariantLabels,
	motion,
} from "framer-motion";
import React from "react";

type Props = {
	text?: string;
	index?: number;
	containerClassName?: string;
	className?: string;
	children?: React.ReactNode;
	delay?: number | undefined;
	hasPageCompletedLoading?: boolean;
	animate?:
		| boolean
		| VariantLabels
		| AnimationControls
		| TargetAndTransition
		| undefined;
};
const ParallaxText = (props: Props) => {
	const {
		index,
		text,
		className,
		containerClassName,
		children,
		delay,
		hasPageCompletedLoading,
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
				duration: 0.2,
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
					whileInView={"visible"}
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

export default ParallaxText;
