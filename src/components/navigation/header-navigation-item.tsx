import React from 'react'

type Props = {
	id: string | number;
	href?: string;
	text?: string;
	className?: string;
	style?: React.CSSProperties;
	icon?: React.ReactNode;
	containerClassName?: string;
	renderLink?: React.ReactNode;
};

const HeaderNavigationItem = (props: Props) => {
    const { id, className, href, icon, style, text, containerClassName, renderLink } =
		props;
    return (
		<div className={`flex flex-row items-center ${containerClassName}`}>
			{ renderLink }
		</div>
	);
}

export default HeaderNavigationItem