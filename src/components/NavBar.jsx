import {
  TiThMenu,
  TiWeatherStormy,
} from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import {
  MdOutlineSportsCricket,
  MdOutlineSettings,
} from "react-icons/md";

import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

const NAV_LINKS = [
  {
    name: "Home",
    link: "/",
    icon: IoHomeOutline,
  },
  {
    name: "News",
    link: "/news",
    icon: FaRegNewspaper,
  },
  {
    name: "Sport",
    link: "/sport",
    icon: MdOutlineSportsCricket,
  },
  {
    name: "Settings",
    link: "/setting",
    icon: MdOutlineSettings,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const handleLogin = () => {
    navigate("/login");
  };

  if (isLoginPage) return null;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Top Navbar */}
      <div className="h-16 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="flex h-full items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TiWeatherStormy className="text-4xl" />

            <h1 className="text-2xl font-semibold">
              Weather
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={handleLogin}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-emerald-500 px-4 py-1.5 text-sm transition-all duration-200 active:bg-emerald-400"
            >
              <BsPersonFill className="text-lg" />

              <span className="font-bold">
                LOG IN
              </span>
            </button>

            <button
              type="button"
              aria-label="Open menu"
              className="cursor-pointer rounded-sm border border-white/10 p-1 transition-all duration-200"
            >
              <TiThMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex h-16 w-full bg-slate-900/80 backdrop-blur-md sm:hidden">
        {NAV_LINKS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `flex h-full flex-1 flex-col items-center justify-center gap-1 font-bold transition-all duration-200 ${
                  isActive
                    ? "border-b-2 border-red-800 text-red-800"
                    : ""
                }`
              }
            >
              <Icon className="text-xl" />

              <span className="text-sm">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>

      {/* Desktop Navigation */}
      <div className="mx-auto mt-4 hidden h-10 w-[70%] rounded-2xl bg-gray-400/80 px-4 backdrop-blur-md sm:flex">
        {NAV_LINKS.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              `flex h-full flex-1 items-center justify-center gap-1 px-4 font-bold transition-all duration-200 ${
                isActive
                  ? "border-b-4 border-white"
                  : ""
              }`
            }
          >
            <span className="text-2xl font-bold">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;