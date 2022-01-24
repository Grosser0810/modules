import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { IMainRoute } from "./shared/utils/interfaces/route";

const mainRoutes = import("./modules");

type TRoutes = {
  [key: string]: IMainRoute[];
};

export const MyRoutes = () => {
  const [routes, setRoutes] = useState<IMainRoute[]>([]);

  useEffect(() => {
    (async () => {
      const routes: TRoutes = {
        ...(await mainRoutes.then((routes) => routes)),
      };
      if (Object.keys(routes).length) {
        const reducedRoutes: IMainRoute[] = Object.keys(routes).reduce(
          (acc: IMainRoute[], cur) => {
            return [...acc, routes[cur]].flat();
          },
          []
        );
        return setRoutes(reducedRoutes);
      }
      return undefined;
    })();
  }, []);

  return (
    <div>
      <Routes>
        {routes.map(({ path, element: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};
