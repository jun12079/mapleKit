import { createBrowserRouter } from "react-router-dom";

import FrontLayout from "../layouts/FrontLayout";
import Homepage from "../pages/HomePage";
import GenesisWeapon from "../pages/GenesisWeapon";
import DestinyWeapon from "../pages/DestinyWeapon";
import Symbols from "../pages/Symbols";
import FAQ from "../pages/FAQ";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "calc",
        children: [
          {
            path: "genesis-weapon",
            element: <GenesisWeapon />,
          },
          {
            path: "destiny-weapon",
            element: <DestinyWeapon />,
          },
        ],
      },
      {
        path: "data",
        children: [
          {
            path: "symbols",
            element: <Symbols />,
          },
        ],
      },
      {
        path: "faq",
        element: <FAQ />,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;