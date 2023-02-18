import React from "react";
import { headerNavigationLink } from "../../../content/link-content";
import { IHeaderNavigationLink } from "../../../interface";
import HeaderNavigationItem from "./header-navigation-item";
import { NAVIGATION_TYPE } from "../../../enum";

type Props = {
	link?: IHeaderNavigationLink[];
	cursorType?: string;
	setCursorType?: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderNavigationList = (props: Props) => {
	const { link, cursorType, setCursorType } = props;
	return (
		<div className="flex flex-row items-center sm:items-start md:items-center gap-x-4">
			{link &&
				link.map((props: IHeaderNavigationLink, index: number) => {
					const {
						id,
						className,
						href,
						icon,
						style,
						text,
						containerClassName,
						type,
					} = props;

					return (
						<div key={index}>
							{type === NAVIGATION_TYPE.LINK && (
								<HeaderNavigationItem
									key={index}
									id={id}
									className={className}
									href={href}
									icon={icon}
									text={text}
									style={style}
									containerClassName={containerClassName}
									renderLink={
										<a
											onMouseEnter={() =>
												setCursorType &&
												setCursorType("hover--link")
											}
											onMouseLeave={() =>
												setCursorType &&
												setCursorType("")
											}
											href={`https://${href}`}
											target="_blank"
											rel="noopener noreferrer"
											style={style}
											className={`w-full flex flex-row items-center px-3 py-2 text-sm font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${className}`}
										>
											{text}
										</a>
									}
								/>
							)}
							{type === NAVIGATION_TYPE.STATIC && (
								<HeaderNavigationItem
									key={index}
									id={id}
									className={className}
									href={href}
									icon={icon}
									text={text}
									style={style}
									containerClassName={containerClassName}
									renderLink={
										<a
											onMouseEnter={() =>
												setCursorType &&
												setCursorType("hover--link")
											}
											onMouseLeave={() =>
												setCursorType &&
												setCursorType("")
											}
											href={`${href}`}
											style={style}
											className={`w-full flex flex-row items-center px-3 py-2 text-sm font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${className}`}
										>
											{text}
										</a>
									}
								/>
							)}
						</div>
					);
				})}
		</div>
	);
};

export default HeaderNavigationList;
