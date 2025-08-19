import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./rootRoute";
import { Login } from "../pages/auth/login";

export const loginRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/login",
  component: Login,

});
