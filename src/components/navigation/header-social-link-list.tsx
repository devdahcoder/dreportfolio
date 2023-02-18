import React from "react";
import { headerSocialMediaLink } from "../../../content/link-content";
import { IHeaderSocialMediaLink } from "../../../interface";
import HeaderSocialLinkItem from "./header-social-link-item";

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderSocialLinkList = (props: Props) => {
	const { cursorType, setCursorType } = props;
	return (
		<div className="flex flex-row items-center gap-x-4">
			{headerSocialMediaLink.map(
				(props: IHeaderSocialMediaLink, index: number) => {
					const {
						id,
						className,
						href,
						icon,
						style,
						text,
						containerClassName,
					} = props;

					return (
						<HeaderSocialLinkItem
							key={index}
							id={id}
							className={className}
							href={href}
							icon={icon}
							text={text}
							style={style}
							containerClassName={containerClassName}
							cursorType={cursorType}
							setCursorType={setCursorType}
						/>
					);
				}
			)}
		</div>
	);
};

export default HeaderSocialLinkList;
