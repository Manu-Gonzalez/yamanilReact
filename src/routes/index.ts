import { createRouter } from "@tanstack/react-router";
import { RootRoute } from "./rootRoute";
import { homeRoute } from "./homeRoot";
import { loginRoute } from "./loginRoot";
import { registerRoute } from "./registerRoot";
import { productsRoute } from "./productsRoot";
import { productFormRoot } from "./productFormRoot";
// Construir el árbol de rutas
const routeTree = RootRoute.addChildren([
  homeRoute,
  productsRoute,
  loginRoute,
  registerRoute,
  productFormRoot
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
