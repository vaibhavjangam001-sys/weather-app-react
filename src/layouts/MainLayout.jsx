import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800  to-gray-900  text-white hide-scrollbar">
      <Navbar />

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
