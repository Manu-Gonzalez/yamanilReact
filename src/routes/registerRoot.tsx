import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./rootRoute";
import { Register } from "../pages/auth/Register";

export const registerRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/register",
  component: Register,
});
