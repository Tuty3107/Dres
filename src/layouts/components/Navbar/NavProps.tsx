import { LinkProps } from "react-router-dom";

export interface listNavItemsProps {
  id: number | string;
  content: string;
  path?: string | LinkProps;
  submenu?: [] ;
}
export interface MenuProps {
  items: listNavItemsProps;
}[]
//Submenu
export interface SubItems {
  id?: number | string;
  content?: string;
  srcFlgs?:string;
}
export interface SubProps {
  children?: string | string[] | JSX.Element | JSX.Element[];
  items: SubItems[];
  dropdown?:boolean;
}[]



