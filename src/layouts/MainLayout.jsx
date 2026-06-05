import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const { preferences } = useSelector(
    (state) => state.authenticationReducer,
  );

  const isDark = preferences?.theme === "dark";

  return (
    <div
      className={`min-h-screen hide-scrollbar transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      {!isLoginPage && <Navbar />}

      <main
        className={`${
          isLoginPage
            ? "min-h-screen"
            : "min-h-[calc(100vh-8rem)] pt-32 sm:min-h-[calc(100vh-4rem)] sm:pt-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;