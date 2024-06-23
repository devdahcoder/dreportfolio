import React from "react";
import { footerSocialMediaLink } from "../../../content/link-content";
import HeaderNavigationList from "../navigation/header-navigation-list";
import SectionContainer from "../section-container";

type Props = {};

const Footer = (props: Props) => {
	const linkClassName = `text-white hover:text-blue-700 hover:underline`;
	return (
    <SectionContainer
      containerClassName="border-t"
      className="flex flex-col lg:flex-row items-center text-center md:items-center justify-start md:justify-between py-5 gap-y-5"
    >


      <HeaderNavigationList
        containerClassName="justify-between md:justify-start "
        link={footerSocialMediaLink}
      />

      <div className="text-white ">
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
    </SectionContainer>
  );
};

export default Footer;
