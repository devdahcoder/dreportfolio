import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useCursorHook } from "../../hook";

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
	mousePosition: {
		x: number;
		y: number;
	};
	isVideoPlaying?: boolean;
};

const Cursor = (props: Props) => {
	const { isVideoPlaying } = props;
	  const { cursorType, mousePosition, setCursorType } = useCursorHook();
	const { x, y } = mousePosition;

	return (
		<>
			<motion.div
				className={`circle--cursor ${cursorType} hidden sm:block`}
				animate={{ x: mousePosition.x - 69, y: mousePosition.y - 69 }}
				// transition={{
				// 	type: "spring",
				// 	damping: 3,
				// 	stiffness: 50,
				// 	restDelta: 0.001,
				// }}
			>
				<p
					className={`${
						cursorType === "video--hover"
							? "font-light text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
							: "hidden"
					}`}
				>
					{isVideoPlaying ? "Pause" : "Play"}
				</p>
			</motion.div>
			<div
				className={`dot animate-ping ${cursorType} hidden sm:block`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
		</>
	);
};

export default Cursor;
