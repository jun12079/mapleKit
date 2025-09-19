import { NavLink } from "react-router-dom";
import destinyRitualFanIcon from "../../assets/images/Destiny_Ritual_Fan_icon.png";

const calcRoutes = [
  { path: "/calc/genesis-weapon", name: "創世武器" },
  { path: "/calc/destiny-weapon", name: "命運武器" },
];

const dataRoutes = [
  { path: "/data/symbols", name: "符文系統" },
];

export default function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={destinyRitualFanIcon}
              alt="Destiny_Ritual_Fan_icon"
              className="me-2"
              style={{ width: "32px", height: "32px" }}
            />
            MapleKit
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link-animated"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  工具
                </a>
                <ul className="dropdown-menu">
                  {
                    calcRoutes.map((route) => (
                      <li key={route.path}>
                        <NavLink className="dropdown-item dropdown-item-animated" to={route.path}>
                          {route.name}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link-animated"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  資料
                </a>
                <ul className="dropdown-menu">
                  {
                    dataRoutes.map((route) => (
                      <li key={route.path}>
                        <NavLink className="dropdown-item dropdown-item-animated" to={route.path}>
                          {route.name}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-animated" to="/faq">常見問題</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  );
}
