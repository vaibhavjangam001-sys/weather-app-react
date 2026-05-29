import { TiThMenu, TiWeatherStormy } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineSportsCricket, MdOutlineSettings } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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

  if (isLoginPage) return null;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Top Navbar */}
      <div className="h-16 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="flex h-full items-center justify-between px-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex flex-1 cursor-pointer items-center gap-2"
          >
            <TiWeatherStormy className="text-4xl" />

            <h1 className="text-2xl font-semibold">
              Weather
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className=" hidden sm:gap-2 h-10 flex-1 rounded-2xl  sm:flex">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `flex flex-1 items-center justify-center hover:text-white hover:border-b-2 transition-all duration-100 px-2 font-semibold  ${
                    isActive
                      ? "border-b-2  border-white"
                      : "text-gray-400"
                  }`
                }
              >
                <span className="text-lg lg:text-xl">
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-emerald-500 px-4 py-1.5 text-sm transition-all duration-200 hover:bg-emerald-600 active:scale-95"
            >
              <BsPersonFill className="text-lg" />

              <span className="font-bold">
                LOG IN
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              className="cursor-pointer rounded-sm border border-white/10 p-1 transition-all duration-200 "
            >
              <TiThMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="flex h-16 w-full bg-slate-900/80 backdrop-blur-md sm:hidden">
        {NAV_LINKS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `flex h-full flex-1 flex-col items-center justify-center gap-1 transition-all duration-200 ${
                  isActive
                    ? "border-b-2 border-red-700 text-red-700"
                    : ""
                }`
              }
            >
              <Icon className="text-xl" />

              <span className="text-xs font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;