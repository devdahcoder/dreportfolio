import React from 'react';
import { headerNavigationLink } from "../../content/header-link";
import { IHeaderNavigationLink } from "../../interface";
import HeaderNavigationItem from './header-navigation-item';

type Props = {
};

const HeaderNavigationList = (props: Props) => {
    return (
		<div className="flex flex-row items-center gap-x-4">
			{headerNavigationLink.map(
				(props: IHeaderNavigationLink, index: number) => {
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
						<HeaderNavigationItem
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
}

export default HeaderNavigationList