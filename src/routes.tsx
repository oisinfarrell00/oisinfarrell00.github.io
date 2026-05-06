import { createBrowserRouter } from "react-router";
import { Root } from "./app/components/Root";
import { Home } from "./app/components/Home";
import { EssayReader } from "./app/components/EssayReader";
import { InterestsHub } from "./app/components/InterestsHub";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "essay/:id", Component: EssayReader },
      { path: "interests/:topic", Component: InterestsHub },
    ],
  },
]);
