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

	return (
		<>
			<div
				className={`hero--text opacity-0 overflow-hidden flex flex-row items-center ${containerClassName}`}
			>
				<div
					className={`text-white ${className}`}
				>
					{text}
					{children}
				</div>
			</div>
		</>
	);
};

export default HeroText;
