import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
      <Navbar />

      <main className="pt-[8rem] min-h-[calc(100vh-8rem)">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;