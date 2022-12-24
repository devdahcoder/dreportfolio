import React from "react";
import HeaderSocialLinkList from "./navigation/header-social-link-list";
import HeaderNavigationList from "./navigation/header-navigation-list";

type Props = {};

const Header = (props: Props) => {
	return (
		<div className="border-b">
			<div className="flex flex-row items-center justify-between py-6 w-4/5 mt-0 mx-auto">
				<div className="flex flex-row items-center">
					<HeaderSocialLinkList />
				</div>
				<div className="flex flex-row items-center">
					<HeaderNavigationList />
				</div>
			</div>
		</div>
	);
};

export default Header;
