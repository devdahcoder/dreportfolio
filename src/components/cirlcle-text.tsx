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
		<div
			className="w-fit h-fit relative"
		>
			<a
				onMouseEnter={() => setCursorType("hover--link")}
				onMouseLeave={() => setCursorType("")}
				href="https://drive.google.com/file/d/1wK5b2CLjJjdySvZ312RRBZu47F-btuE3/view?usp=sharing/"
				target="_blank"
				rel="noopener noreferrer"
				className="z-10 flex flex-row items-center justify-center select-none absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
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
		</div>
	);
};

export default CircleText;
