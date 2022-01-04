import { ComponentType, LazyExoticComponent } from "react";

export interface IMainRoute {
  path: string;
  sidebar: boolean;
  isHomePage?: boolean;
  element: LazyExoticComponent<ComponentType<any>>;
  subRoutes: IMainRoute[];
}
