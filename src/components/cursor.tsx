import React, { useRef } from 'react';
import { motion } from "framer-motion"

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
	mousePosition: {
		x: number;
		y: number;
	};
};

const Cursor = (props: Props) => {
	
	const { cursorType, setCursorType, mousePosition } = props;

	const { x, y } = mousePosition;

    return (
		<>
			<motion.div
				className={`circle--cursor ${cursorType} hidden sm:block`}
				animate={{ x: mousePosition.x - 69, y: mousePosition.y - 69 }}
				transition={{
					type: "spring",
					damping: 3,
					stiffness: 50,
					restDelta: 0.001,
				}}
			></motion.div>
			<div
				className={`dot animate-ping ${cursorType} hidden sm:block`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
		</>
	);
}

export default Cursor