export interface IWork {
    id?: number | string;
    name: string;
    href?: string;
    detail?: string;
    image?: string;
}

export interface IExperience {
    id?: number | string;
    text: string;
    href?: string;
    detail?: string;
}

export interface IHeaderSocialMediaLink {
    id: string | number;
    href?: string;
    text?: string;
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    containerClassName?: string;
}

export interface IHeaderNavigationLink extends IHeaderSocialMediaLink { };