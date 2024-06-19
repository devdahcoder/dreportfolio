export type RefType =
    | HTMLDivElement
    | ((el: HTMLDivElement) => void)
    | undefined
    | any;
