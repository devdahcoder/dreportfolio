import React from 'react'

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
	mousePosition: {
		x: null;
		y: null;
	};
};

const Cursor = (props: Props) => {
	const { cursorType, setCursorType, mousePosition } = props;

	const { x, y } = mousePosition;
    return (
		<>
			<div
				className={`circle--cursor ${cursorType} hidden sm:block`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
			<div
				className={`dot animate-ping ${cursorType} hidden sm:block`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
		</>
	);
}

export default Cursor