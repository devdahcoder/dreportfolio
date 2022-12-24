import React from "react";
import { headerSocialMediaLink } from "../content/header-social-link";
import { IHeaderSocialMediaLink } from "../interface";
import HeaderSocialLinkItem from "./header-social-link-item";

type Props = {};

const HeaderSocialLinkList = (props: Props) => {
	return (
		<div className="flex flex-row items-center">
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
							id={id}
							className={className}
							href={href}
							icon={icon}
							text={text}
							style={style}
							containerClassName={containerClassName}
						/>
					);
				}
			)}
		</div>
	);
};

export default HeaderSocialLinkList;
