import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypesSelector } from "../hooks/useTypesSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRouter = () => {
  const { isAuth } = useTypesSelector((state) => state.auth);
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
