import { TiThMenu, TiWeatherStormy } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineSportsCricket, MdOutlineSettings } from "react-icons/md";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const mobileNavLinks = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline className="text-xl" />,
    },
    {
      name: "News",
      link: "/news",
      icon: <FaRegNewspaper className="text-xl" />,
    },
    {
      name: "Sport",
      link: "/sport",
      icon: <MdOutlineSportsCricket className="text-xl" />,
    },
    {
      name: "Setting",
      link: "/setting",
      icon: <MdOutlineSettings className="text-xl" />,
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {!isLoginPage && (
        <nav className="fixed top-0 left-0 z-50 w-full sm:hidden">
          {/* Top Navbar */}
          <div className="h-16 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
            <div className="flex h-full items-center justify-between px-4">
              {/* Brand */}
              <div className="flex flex-1 items-center gap-2">
                <TiWeatherStormy className="text-4xl" />

                <h1 className="text-2xl font-semibold">Weather</h1>
              </div>

              {/* Login + Menu */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={handleLogin}
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-emerald-500 px-4 py-1.5 text-sm transition-all duration-200 active:bg-emerald-400"
                >
                  <BsPersonFill className="text-lg" />

                  <span className="font-bold">LOG IN</span>
                </button>

                <button
                  aria-label="Open menu"
                  className="rounded-sm border border-white/10 p-1 transition-all duration-200"
                >
                  <TiThMenu className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex h-16 w-full bg-slate-900/80 backdrop-blur-md">
            {mobileNavLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `flex h-full flex-1 flex-col items-center justify-center gap-1 font-bold ${
                    isActive ? "border-b-2 border-red-800 text-red-800" : ""
                  }`
                }
              >
                {item.icon}

                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
