import { TiWeatherStormy } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/authenticationAction";

const NAV_LINKS = [
  { name: "Home",     link: "/",        icon: IoHomeOutline     },
  { name: "News",     link: "/news",    icon: FaRegNewspaper    },
  { name: "Settings", link: "/setting", icon: MdOutlineSettings },
];

const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, isAuthChecked, usersData, preferences } =
    useSelector((state) => state.authenticationReducer);

  const isDark = preferences?.theme === "dark";

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Top Navbar */}
      <div
        className={`h-16 border-b backdrop-blur-md ${
          isDark
            ? "border-slate-700 bg-slate-900/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="flex h-full items-center justify-between px-4">

          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className={`flex flex-1 cursor-pointer items-center gap-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            <TiWeatherStormy className="text-4xl" />
            <h1 className="text-2xl font-semibold">Weather</h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden h-10 flex-1 rounded-2xl sm:flex sm:gap-2">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `flex flex-1 items-center justify-center px-2 font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-sky-600 border-b-2 border-sky-600"
                      : isDark
                        ? "text-slate-300 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                  }`
                }
              >
                <span className="text-lg lg:text-xl">{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {!isAuthChecked ? (
              <div className="h-10 w-28 animate-pulse rounded-lg bg-slate-400" />
            ) : !isAuthenticated ? (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-500 px-4 py-1.5 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-600 active:scale-95"
              >
                <BsPersonFill className="text-lg" />
                <span>LOG IN</span>
              </button>
            ) : (
              <>
                <div
                  onClick={() => navigate("/profile")}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-200 ${
                    isDark
                      ? "border-slate-700 hover:bg-slate-800"
                      : "border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <BsPersonFill className="text-lg" />
                  <span className="hidden font-semibold sm:block">
                    {capitalize(usersData?.username)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="cursor-pointer rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className={`flex h-16 w-full border-t backdrop-blur-md sm:hidden ${
          isDark
            ? "border-slate-700 bg-slate-900/80"
            : "border-slate-200 bg-white/80"
        }`}
      >
        {NAV_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `flex h-full flex-1 flex-col items-center justify-center gap-1 transition-all duration-200 ${
                  isActive
                    ? "border-b-2 border-sky-600 text-sky-600"
                    : isDark
                      ? "text-slate-300"
                      : "text-slate-500"
                }`
              }
            >
              <Icon className="text-xl" />
              <span className="text-xs font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;