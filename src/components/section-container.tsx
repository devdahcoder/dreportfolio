import React from "react";

type Props = {
	className?: string;
	containerClassName?: string;
	children?: React.ReactNode;
};

const SectionContainer = (props: Props) => {
	const { className, containerClassName, children } = props;
	return (
		<div className={`${containerClassName}`}>
			<div className={`w-4/5 mt-0 mx-auto ${className}`}>{children}</div>
		</div>
	);
};

export default SectionContainer;
