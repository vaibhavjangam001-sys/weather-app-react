import { useState } from "react";
import Storm from "../components/weatherAnimation/Storm";


import Login from "../components/LoginPage/Login";
import Signup from "../components/LoginPage/Signup";
import SocailMediaLog from "../components/LoginPage/SocailMediaLog";

const LoginSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-4 py-2 px-6">
      {/* Brand */}
      <div className="flex flex-col items-center gap-2">
        <Storm/>
        {isLogin ? (
          <h1 className="text-center text-3xl font-bold italic text-gray-400">
            Welcome Back
            <span className="block">To Weather</span>
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-bold italic text-gray-400">
            Discover Real-Time
            <span className="block">Weather Updates</span>
          </h1>
        )}
      </div>

      {/* Switch Login / Signup */}
      <div className="flex w-full justify-center gap-14 select-none">
        <div
          onClick={() => setIsLogin(true)}
          className={`cursor-pointer p-2 ${
            isLogin ? "border-b-4 border-amber-50" : ""
          }`}
        >
          <h1 className="text-2xl font-bold sm:text-3xl  text-gray-400">Login</h1>
        </div>

        <div
          onClick={() => setIsLogin(false)}
          className={`cursor-pointer p-2 ${
            !isLogin ? "border-b-4 border-amber-50" : ""
          }`}
        >
          <h1 className="text-2xl font-bold sm:text-3xl  text-gray-400">New User</h1>
        </div>
      </div>

      {/* Login / Signup Component */}
      {isLogin ? <Login /> : <Signup />}

      {/* Social media login session */}
      <SocailMediaLog />
    </section>
  );
};

export default LoginSection;
