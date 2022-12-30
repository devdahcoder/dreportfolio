import React from "react";
import Folder from "../../icon/folder";

type Props = {
	text?: string;
	className?: string;
};

const CircleText = (props: Props) => {
	const { text, className } = props;

	const splitText = text?.split("");

	// const breakpoint = 320;

	// const width = WindowSize();

	return (
		<div className="w-fit h-fit relative">
			<a
				href="http://"
				target="_blank"
				rel="noopener noreferrer"
				className="z-10 flex flex-row items-center justify-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
			>
				<Folder className="fill-black " />
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
