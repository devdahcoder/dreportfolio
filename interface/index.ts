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

export interface IExperience {
    id?: number | string;
    text: string;
    href?: string;
    detail?: string;

}