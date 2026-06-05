import { useState } from "react";
import Storm from "../components/animation/Storm";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const LoginSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSignupSuccess = () => {
    setIsLogin(true);
  };

  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-4 px-6 py-2">
      <div className="flex flex-col items-center gap-2">
        <Storm />
        {isLogin ? (
          <h1 className="text-center text-3xl font-bold italic text-slate-600">
            Welcome Back
            <span className="block">To Weather</span>
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-bold italic text-slate-600">
            Discover Real-Time
            <span className="block">Weather Updates</span>
          </h1>
        )}
      </div>

      <div className="flex w-full select-none justify-center gap-14">
        <div
          onClick={() => setIsLogin(true)}
          className={`cursor-pointer p-2 transition-all duration-200 ${
            isLogin ? "border-b-4 border-sky-500" : "border-b-4 border-transparent"
          }`}
        >
          <h1 className="text-2xl font-bold text-slate-600 sm:text-3xl">Login</h1>
        </div>
        <div
          onClick={() => setIsLogin(false)}
          className={`cursor-pointer p-2 transition-all duration-200 ${
            !isLogin ? "border-b-4 border-sky-500" : "border-b-4 border-transparent"
          }`}
        >
          <h1 className="text-2xl font-bold text-slate-600 sm:text-3xl">New User</h1>
        </div>
      </div>

      {isLogin ? <Login /> : <Signup onSignupSuccess={handleSignupSuccess} />}
    </section>
  );
};

export default LoginSection;