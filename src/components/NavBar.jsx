import { TiThMenu } from "react-icons/ti";
import { BsToggle2Off } from "react-icons/bs"
import { BsToggle2On } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { TiWeatherStormy } from "react-icons/ti";

const Navbar = () => {

  const handleLogIn = () => {
    console.log("logIn");
  }

  return (
    <>
      {/* Mobile NavBar viwe */}
      <nav className="fixed sm:hidden  top-0 left-0 z-50 h-16 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="flex h-full items-center justify-between px-4">

          <div className="flex-1 flex items-center gap-2">
            <TiWeatherStormy className="text-4xl"/>
            <h1 className="text-2xl font-semibold">Weather</h1></div>

          <div className="flex items-center">
            <button onClick={handleLogIn} className="bg-emerald-500 cursor-pointer active:bg-emerald-400 flex gap-2 items-center rounded-lg border text-sm px-3 py-1 border-white/20 "><BsPersonFill className="text-lg"/> <span className="font-bold">LOG IN</span></button>
          </div>
        </div>
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
