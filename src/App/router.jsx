import { createBrowserRouter } from "react-router-dom";

import { MainTemplate } from "../ds/templates/MainTemplate";
import { HomePage } from "../home/HomePage";
import { CountersPage } from "../counters/CountersPage";
import ProductPage from "../product/ProductPage/ProductPage";
import { Project } from "../Project";
import FavoritesPage from "../product/FavoritesPage/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        to: "/favorites",
        label: "favorites",
      },
    ],
  },
]);
