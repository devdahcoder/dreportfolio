import React from "react";
import { headerNavigationLink } from "../../content/link-content";
import HeaderNavigationList from "./navigation/header-navigation-list";
import HeaderSocialLinkList from "./navigation/header-social-link-list";
import SectionContainer from "./section-container";

type Props = {
	cursorType: string;
	setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const Header = (props: Props) => {
	const { cursorType, setCursorType } = props;
	return (
		<SectionContainer
			containerClassName="border-b"
			className=" flex flex-row items-center justify-center sm:justify-between py-6"
		>
			<div className="hidden sm:flex flex-row items-center">
				<HeaderSocialLinkList
					cursorType={cursorType}
					setCursorType={setCursorType}
				/>
			</div>
			<div className="flex flex-row items-center">
				<HeaderNavigationList
					link={headerNavigationLink}
					cursorType={cursorType}
					setCursorType={setCursorType}
				/>
			</div>
		</SectionContainer>
	);
};

export default Header;
