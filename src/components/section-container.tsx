import React from "react";

type Props = {
	className?: string;
	containerClassName?: string;
	children?: React.ReactNode;
	id?: string;
};

const SectionContainer = (props: Props) => {
	const { className, containerClassName, children, id } = props;
	return (
		<section id={`${id}`} className={`${containerClassName}`}>
			<div className={`w-4/5 mt-0 mx-auto ${className}`}>{children}</div>
		</section>
	);
};

export default SectionContainer;
