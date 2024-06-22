import React from "react";
import { headerNavigationLink } from "../../../content/link-content";
import { IHeaderNavigationLink } from "../../../interface";
import HeaderNavigationItem from "./header-navigation-item";
import { NAVIGATION_TYPE } from "../../../enum";
import NavigationCharacter from "../navigation-character";
import { useInView } from "react-intersection-observer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {
  link?: IHeaderNavigationLink[];
  cursorType?: string;
  inView?: boolean;
  setCursorType?: React.Dispatch<React.SetStateAction<string>>;
};

const resetAnchor = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1,
    duration: 0.1,
    color: "#FFFFFF",
  });
};

const openAnchorBorder = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      width: "0px",
    },
    {
      duration: 0.4,
      width: "100%",
    },
  );
};

const closeAnchorBorder = (element: HTMLElement) => {
  gsap.to(element, {
    duration: 0.4,
    width: "0px",
    ease: "bounce.out",
  });
};

const animateAnchor = (element: HTMLElement, index: number) => {
  gsap.fromTo(
    element,
    { scale: 1, color: "#ffffff" },
    {
      scale: 1.2,
      duration: 0.1,
      delay: 0.1 + index * 0.1,
      color: "#F96F21",
      onComplete: () => {
        resetAnchor(element);
      },
    },
  );
};

const animateAnchorSection = (elements: HTMLElement[], index: number) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      yPercent: 100,
    },
    {
      opacity: 1,
      delay: 0.1 + index * 0.2,
      yPercent: 0,
      duration: 1,
      ease: "power2.out",
    },
  );
};

const HeaderNavigationList = (props: Props) => {
  const { link, cursorType, setCursorType, inView } = props;
  const linkContainer: HTMLSpanElement[][] = [];
  const anchorBorderElements: HTMLDivElement[] = [];

  const triggerOpenAnchorBorderAnimation = (index: number) => {
    openAnchorBorder(anchorBorderElements[index]);
  };

  const triggerCloseAnchorBorderAnimation = (index: number) => {
    closeAnchorBorder(anchorBorderElements[index]);
  };

  const triggerAnchorAnimation = (index: number) => {
    // linkContainer[index].forEach((element: HTMLSpanElement, idx: number) => {
    //   animateAnchor(element, idx);
    // });
  };

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
                      onMouseEnter={() => {
                        setCursorType && setCursorType("hover--link");

                        triggerAnchorAnimation(index);
                        triggerOpenAnchorBorderAnimation(index);
                      }}
                      onMouseLeave={() => {
                        setCursorType && setCursorType("");
                        triggerCloseAnchorBorderAnimation(index);
                      }}
                      href={`https://${href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={style}
                      className={`w-full flex flex-row items-center px-3 py-2 font-medium bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${className}`}
                    >
                      <NavigationCharacter
                        character={text?.split(" ")}
                        index={index}
                        linkContainers={linkContainer}
                      />
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
                      onMouseEnter={() => {
                        setCursorType && setCursorType("hover--link");

                        triggerAnchorAnimation(index);
                        triggerOpenAnchorBorderAnimation(index);
                      }}
                      onMouseLeave={() => {
                        setCursorType && setCursorType("");
                        triggerCloseAnchorBorderAnimation(index);
                      }}
                      href={`${href}`}
                      style={style}
                      className={`w-full flex flex-row items-center px-3 py-2 text-sm font-semibold bg-gradient-to-tl from-slate-200 to-gray-100 bg-clip-text text-transparent ${className}`}
                    >
                      <NavigationCharacter
                        character={text?.split(" ")}
                        index={index}
                        linkContainers={linkContainer}
                      />
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
