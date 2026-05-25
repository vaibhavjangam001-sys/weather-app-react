import { TiThMenu } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { TiWeatherStormy } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

const Navbar = () => {
  const mobileNavLinks = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline className="text-2xl" />,
    },
    {
      name: "News",
      link: "/news",
      icon: <FaRegNewspaper className="text-2xl" />,
    },
    {
      name: "Sport",
      link: "/sport",
      icon: <MdOutlineSportsCricket className="text-2xl" />,
    },
    {
      name: "Setting",
      link: "/setting",
      icon: <MdOutlineSettings className="text-2xl" />,
    },
  ];

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Mobile NavBar viwe */}
      <nav className="fixed sm:hidden  top-0 left-0 z-50 h-16 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        {/*Brand Logo or Name*/}
        <div className="flex h-full items-center justify-between px-4">
          <div className="flex-1 flex items-center gap-2">
            <TiWeatherStormy className="text-4xl" />
            <h1 className="text-2xl font-semibold">Weather</h1>
          </div>
          {/*Login Button Or Menu */}
          {!isLoginPage && (
            <div className="flex justify-center items-center gap-6">
              <button
                onClick={handleLogin}
                className="bg-emerald-500 cursor-pointer active:bg-emerald-400 flex gap-2 items-center rounded-lg border text-sm px-3 py-1 border-white/20 "
              >
                <BsPersonFill className="text-lg" />
                <span className="font-bold">LOG IN</span>
              </button>
              <button aria-label="Open menu" className="cursor-pointer border border-white/10 rounded-sm p-1">
                <TiThMenu className="text-2xl" />
              </button>
            </div>
          )}
        </div>

        {/* All Secontion Home,news,sport,setting */}
        {!isLoginPage && (
          <div className="h-16 w-full  flex ">
            {mobileNavLinks.map((item) => (
              <div
                key={item.name}
                className={`flex justify-center items-center flex-1 ${item.color}`}
              >
                <NavLink
                  className={({ isActive }) =>
                    `flex justify-center h-full w-full items-center font-bold  flex-col ${isActive ? " border-b-2 border-white text-amber-700" : ""}`
                  }
                  to={item.link}
                >
                  {item.icon} <span>{item.name}</span>
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* tablet or above table size NavBar */}
      <nav className=" hidden fixed sm:block px-3 py-6 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <h1 className="text-3xl font-semibold">Brand</h1>

          <div className="flex items-center gap-6">
            <button className="cursor-pointer">Search</button>
            <button className="cursor-pointer">Profile</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
