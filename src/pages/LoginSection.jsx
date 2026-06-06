import { useState } from "react";
import { useSelector } from "react-redux";
import Storm from "../components/animation/Storm";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const LoginSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  const isDark = useSelector(
    (state) => state.authenticationReducer.preferences?.theme === "dark"
  );

  const handleSignupSuccess = () => {
    setIsLogin(true);
  };

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-2">
      <div className="flex flex-col items-center gap-2">
        <Storm />
        {isLogin ? (
          <h1 className={`text-center text-3xl font-bold italic ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Welcome Back
            <span className="block">To Weather</span>
          </h1>
        ) : (
          <h1 className={`text-center text-3xl font-bold italic ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Discover Real-Time
            <span className="block">Weather Updates</span>
          </h1>
        )}
      </div>

      <div className="flex w-full select-none justify-center gap-14">
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className={`cursor-pointer p-2 transition-all duration-200 ${
            isLogin ? "border-b-4 border-sky-500" : "border-b-4 border-transparent"
          }`}
        >
          <h1 className={`text-2xl font-bold sm:text-3xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Login
          </h1>
        </button>

        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className={`cursor-pointer p-2 transition-all duration-200 ${
            !isLogin ? "border-b-4 border-sky-500" : "border-b-4 border-transparent"
          }`}
        >
          <h1 className={`text-2xl font-bold sm:text-3xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            New User
          </h1>
        </button>
      </div>

      {isLogin ? <Login /> : <Signup onSignupSuccess={handleSignupSuccess} />}
    </section>
  );
};

export default LoginSection;