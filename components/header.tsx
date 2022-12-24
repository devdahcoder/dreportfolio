import React from "react";
import HeaderSocialLinkList from "./header-social-link-list";

type Props = {};

const Header = (props: Props) => {
	return (
		<div className="flex flex-row items-center justify-between">
			<div className="flex flex-row items-center">
				<HeaderSocialLinkList />
			</div>

			<div>hello world</div>
		</div>
	);
};

export default Header;
