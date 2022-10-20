import { Main } from "../pages/main/Main";
import React from "react";
import { Menu } from "pages/menu/Menu";

export enum locations {
  MAIN = "/",
  MENU = "/menu",
}

interface RouterProps {
  path: locations;
  component: React.ComponentType;
  name: string;
  exact: boolean;
}

export const routes: RouterProps[] = [
  {
    path: locations.MAIN,
    component: Main,
    name: "Main",
    exact: true,
  },
  {
    path: locations.MENU,
    component: Menu,
    name: "Menu",
    exact: true,
  },
];
