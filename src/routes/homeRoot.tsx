import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./rootRoute";
import Home from "../pages/home/Home";

export const homeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home,
});
