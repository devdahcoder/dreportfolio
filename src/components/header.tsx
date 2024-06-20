import React from "react";
import {
  headerNavigationLink,
  headerSocialMediaLink,
} from "../../content/link-content";
import HeaderNavigationList from "./navigation/header-navigation-list";
import HeaderSocialLinkList from "./navigation/header-social-link-list";
import SectionContainer from "./section-container";
import { RefType } from "../../type/index";
import { useInView } from "react-intersection-observer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {
  cursorType: string;
  setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

const Header = (props: Props) => {
  const { cursorType, setCursorType } = props;
  const { ref, inView, entry } = useInView();

  useGSAP(
    () => {
      if (entry) {
        gsap.fromTo(
          ".header--container",
          {
            yPercent: -200,
            ease: "power3.out",
          },
          {
            yPercent: 0,
            duration: 1.5,
            ease: "power2.out",
          },
        );
      }
    },
    { dependencies: [inView] },
  );

  return (
    <SectionContainer
      refElement={ref}
      containerClassName="border-b"
      className="header--container flex flex-row items-center justify-center sm:justify-between py-7"
    >
      <HeaderNavigationList
        link={headerSocialMediaLink}
        cursorType={cursorType}
			  setCursorType={setCursorType}
			  inView={inView}
      />
      <HeaderNavigationList
        link={headerNavigationLink}
        cursorType={cursorType}
        setCursorType={setCursorType}
      />
    </SectionContainer>
  );
};

export default Header;
