import React from "react";
import { footerSocialMediaLink } from "../../../content/link-content";
import HeaderNavigationList from "../navigation/header-navigation-list";

type Props = {};

const Footer = (props: Props) => {
	const linkClassName = `text-white hover:text-blue-700 hover:underline`;
	return (
		<div className="border-t bg-[#151515] px-3">
			<div
				className="flex flex-col lg:flex-row items-start sm:items-center justify-between py-5 w-4/5 sm:mx-auto sm:my-0 gap-y-5"
			>
				<div className="flex flex-row items-center ">
					<HeaderNavigationList link={footerSocialMediaLink} />
				</div>

				<div className="text-white">
					<p>
						Collaborative work of{" "}
						<span>
							<a
								href="http://"
								target="_blank"
								rel="noopener noreferrer"
								className={`${linkClassName}`}
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
								className={`${linkClassName}`}
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
};

export default Footer;
