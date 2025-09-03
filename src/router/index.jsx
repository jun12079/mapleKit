import { createHashRouter } from "react-router-dom";

import FrontLayout from "../layouts/FrontLayout";
import Homepage from "../pages/HomePage";
import DestinyWeapon from "../pages/DestinyWeapon";
import NotFound from "../pages/NotFound";
import FAQ from "../pages/FAQ";

const router = createHashRouter([
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'destiny-weapon',
        element: <DestinyWeapon />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

export default router;