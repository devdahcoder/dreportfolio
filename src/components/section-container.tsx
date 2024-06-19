import React from "react";

type Props = {
	className?: string;
	containerClassName?: string;
	children?: React.ReactNode;
	id?: string;
	refElement?: any
};

const SectionContainer = (props: Props) => {
	const { className, containerClassName, children, id, refElement } = props;
	return (
		<section ref={refElement} id={`${id}`} className={`${containerClassName}`}>
			<div className={`w-[85%] mt-0 mx-auto ${className}`}>{children}</div>
		</section>
	);
};

export default SectionContainer;
