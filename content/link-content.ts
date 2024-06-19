import { NAVIGATION_TYPE } from "../enum";
import { IHeaderNavigationLink, IHeaderSocialMediaLink } from "../interface";
import { footerLinkClassName } from "../src/style/global";

export const headerSocialMediaLink: IHeaderSocialMediaLink[] = [
    {
        id: 1,
        text: "Be.",
        href: "https://www.behance.net/damilare0",
        type: NAVIGATION_TYPE.LINK
    },
    {
        id: 2,
        text: "Tw.",
        href: "https://www.twitter.com/__dreyyy_",
        type: NAVIGATION_TYPE.LINK
    },
    {
        id: 3,
        text: "In.",
        href: "https://www.linkedin.com/in/damilare007/",
        type: NAVIGATION_TYPE.LINK
    },
    {
        id: 4,
        text: "Em.",
        href: "mailto:damilare.xyz@gmail.com",
        type: NAVIGATION_TYPE.LINK
    },
];

export const footerSocialMediaLink: IHeaderSocialMediaLink[] = [
    {
        id: 1,
        text: "Behance",
        href: "https://www.behance.net/damilare0",
        className: `${footerLinkClassName}`,
        type: NAVIGATION_TYPE.LINK
    },
    {
        id: 2,
        text: "Twitter",
        href: "https://www.twitter.com/__dreyyy_",
        className: `${footerLinkClassName}`,
        type: NAVIGATION_TYPE.LINK
    },
    {
        id: 3,
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/damilare007/",
        className: `${footerLinkClassName}`,
        type: NAVIGATION_TYPE.LINK
    },
    {
        id: 4,
        text: "Email",
        href: "mailto:damilare.xyz@gmail.com",
        className: `${footerLinkClassName}`,
        type: NAVIGATION_TYPE.LINK
    },
];

export const headerNavigationLink: IHeaderNavigationLink[] = [
    {
        id: 1,
        text: "About - Me",
        href: "#about",
        type: NAVIGATION_TYPE.STATIC
    },
    {
        id: 2,
        text: "My - Works",
        href: "#works",
        type: NAVIGATION_TYPE.STATIC
    },
    
];