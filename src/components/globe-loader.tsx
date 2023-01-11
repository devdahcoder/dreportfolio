import React from "react";
import { motion } from "framer-motion";

type Props = {
	className?: string;
	loading: boolean;
	loadingPercentage?: number;
};

const GlobeLoader = (props: Props) => {
	const { className, loading, loadingPercentage } = props;
	return (
		<motion.div
			className={`${
				loadingPercentage === 100 ? "z-0 pointer-events-none" : "bg-black z-50"
			} blur-3xl fixed top-0 left-0 h-full w-full flex flex-row items-center justify-center transition-all duration-500 ease-in-out`}
		>
			<div
				className={`relative globe--container w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 ${className}`}
			>
				<div className="globe--loader"></div>
				<motion.p
					initial={{ opacity: 0.1 }}
					animate={
						loadingPercentage === 100
							? { opacity: 0 }
							: { opacity: 1 }
					}
					transition={{ ease: "easeInOut", duration: 6 }}
					className="text-black text-4xl md:text-5xl lg:text-6xl font-medium font-cabinetgrotesk absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
				>
					{loadingPercentage}%
				</motion.p>
			</div>
		</motion.div>
	);
};

export default GlobeLoader;
