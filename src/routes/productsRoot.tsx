import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./rootRoute";
import {ProductList}  from "../pages/products/ProductList";

export const productsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/products",
  component: ProductList,
});
