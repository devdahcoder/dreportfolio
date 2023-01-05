import React from "react";
import Folder from "../../icon/folder";
import { motion } from "framer-motion";

type Props = {
	text?: string;
	className?: string;
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const CircleText = (props: Props) => {
	const { text, className, cursorType, setCursorType } = props;

	const splitText = text?.split("");

	return (
		<motion.div
			initial={{ x: "200%", opacity: 0.4 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				duration: 2,
				ease: "easeInOut",
				velocity: 1,
				delay: 1,
			}}
			className="w-fit h-fit relative"
		>
			<a
				onMouseEnter={() => setCursorType("hover--link")}
				onMouseLeave={() => setCursorType("")}
				href="http://"
				target="_blank"
				rel="noopener noreferrer"
				className="z-10 flex flex-row items-center justify-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
			>
				<Folder className="fill-white " />
			</a>
			<div
				className={`
            rounded-full text-center font-inter animate-spin-slow 
            h-36 
            w-36 ${className}`}
			>
				<p>
					{splitText?.map((letter, index) => {
						return (
							<span
								style={{
									transform: `rotate(${index * 18.0}deg)`,
									transformOrigin: `0 70px`,
								}}
								className={`text-base z-0 absolute left-1/2 font-inter bg-gradient-to-tl from-slate-300 to-gray-400 bg-clip-text text-transparent`}
								key={index}
							>
								{letter}
							</span>
						);
					})}
				</p>
			</div>
		</motion.div>
	);
};

export default CircleText;
