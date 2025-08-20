import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./rootRoute";
import { ProductForm } from "../pages/products/ProductForm";

export const productFormRoot = createRoute({
  getParentRoute: () => RootRoute,
  path: "/products/add",
  component: ProductForm,
});
