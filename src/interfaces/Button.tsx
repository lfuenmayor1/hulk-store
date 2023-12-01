export default interface Button{
    variant:string,
    text:string,
    icon:string,
    disabled:boolean;
    isLink: boolean;
    link:string
    handelClick: () => void
 }