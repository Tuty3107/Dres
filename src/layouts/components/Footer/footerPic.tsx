export interface listFooterInfo {
    ResInfoProps:  {
        id?: number,
        pics: string[],
        address: string
    }[]
};

export interface itemsFtProps {
    id:number;
    content:string;
    path?:string;
}