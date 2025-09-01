import { createHashRouter } from "react-router-dom";

import FrontLayout from "../layouts/FrontLayout";
import Homepage from "../pages/HomePage";
import DestinyWeapon from "../pages/DestinyWeapon";
import NotFound from "../pages/NotFound";

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
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

export default router;