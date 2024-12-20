import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
	className?: string;
	imageLink?: string;
	index?: number;
	size?: string;
};

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ImageContainer = (props: Props) => {
	const { className, imageLink, size } = props;
	const classStyle = props.className ? props.className : "";
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [isInView, setIsInView] = useState<boolean>(false);

	return (
		<div className="block w-full">
			<motion.div
				initial={false}
				animate={
					isLoaded && isInView
						? {
								WebkitMaskImage: visibleMask,
								maskImage: visibleMask,
						  }
						: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
				}
				transition={{ duration: 0.5, delay: 0.001 }}
				viewport={{ once: true }}
				onViewportEnter={() => setIsInView(true)}
				className={`relative block overflow-hidden bg-white ${classStyle} ${size}`}
			>
				<img
					src={`${imageLink}`}
					onLoad={() => setIsLoaded(true)}
					alt="image"
					className={`w-full h-full absolute top-0 left-0 select-none object-cover ${size}`}
				/>
			</motion.div>
		</div>
	);
};

export default ImageContainer;
