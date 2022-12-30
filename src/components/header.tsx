import React from "react";
import { headerNavigationLink } from "../../content/link-content";
import HeaderNavigationList from "./navigation/header-navigation-list";
import HeaderSocialLinkList from "./navigation/header-social-link-list";
import SectionContainer from "./section-container";

type Props = {};

const Header = (props: Props) => {
	return (
		<SectionContainer
			containerClassName="border-b"
			className="flex flex-row items-center justify-between py-6"
		>
			<div className="flex flex-row items-center">
				<HeaderSocialLinkList />
			</div>
			<div className="flex flex-row items-center">
				<HeaderNavigationList link={headerNavigationLink} />
			</div>
		</SectionContainer>
	);
};

export default Header;
