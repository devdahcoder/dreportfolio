import gsap from "gsap";
import React from "react";

type Props = {
	id: string | number;
	href?: string;
	text?: string;
	className?: string;
	style?: React.CSSProperties;
	icon?: React.ReactNode;
	containerClassName?: string;
};

const HeaderSocialLinkItem = (props: Props) => {
	const { id, className, href, icon, style, text, containerClassName } =
		props;

	const mouseOver = (event: React.MouseEvent) => {
		gsap.to(event.currentTarget, {
			scale: 1.2,
		});
	};
	const mouseOut = (event: React.MouseEvent) => {
		gsap.to(event.currentTarget, { scale: 1 });
	};
	return (
		<div
			className={`flex flex-row items-center ${containerClassName}`}
			onMouseEnter={mouseOver}
			onMouseLeave={mouseOut}
		>
			<a
				href={`https://${href}`}
				target="_blank"
				rel="noopener noreferrer"
				style={style}
				className={`w-full flex flex-row items-center px-3 py-2 text-sm font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${className}`}
			>
				{text}
			</a>
		</div>
	);
};

export default HeaderSocialLinkItem;
