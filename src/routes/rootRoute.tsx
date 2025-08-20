import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NavBar } from "../components/NavBar";


export const RootRoute = createRootRoute({
  component: () => (
    <div>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  ),
});

