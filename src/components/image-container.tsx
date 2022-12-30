import React from "react";

type Props = {
	className?: string;
    imageLink?: string;
};

const ImageContainer = (props: Props) => {
	const { className, imageLink } = props;
	const classStyle = props.className ? props.className : "";

	return (
		<div className="block w-full">
			<div
				className={`relative block overflow-hidden pb-[100%] ${classStyle}`}
			>
				<img
					src={`${imageLink}`}
					alt="image"
					className="w-full h-full absolute top-0 left-0 select-none object-cover"
				/>
			</div>
		</div>
	);
};

export default ImageContainer;