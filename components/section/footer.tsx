import React from 'react';
import HeaderNavigationList from "../navigation/header-navigation-list";
import { footerSocialMediaLink } from '../../content/link-content';

type Props = {}

const Footer = (props: Props) => {
    return (
		<div className="border-t">
			<div className="flex flex-row items-center justify-between py-5 w-4/5 mx-auto my-0">
				<div className="flex flex-row items-center ">
					<HeaderNavigationList link={footerSocialMediaLink} />
				</div>
				<div>
					<p>
						Collaborative work of{" "}
						<span>
							<a
								href="http://"
								target="_blank"
								rel="noopener noreferrer"
							>
								Damilare
							</a>
						</span>{" "}
						x{" "}
						<span>
							<a
								href="http://"
								target="_blank"
								rel="noopener noreferrer"
							>
								Olamide
							</a>
						</span>{" "}
						(Dev)
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer