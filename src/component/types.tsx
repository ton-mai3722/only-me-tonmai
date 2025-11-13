import { JSX } from "react";

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};



export type MenuItemWithSubmenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};


