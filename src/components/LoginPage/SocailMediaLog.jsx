import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocailMediaLog = () => {
  return (
    <>
      {/* Divider */}
      <div className="flex w-full max-w-md items-center gap-2">
        <hr className="flex-1 border-slate-300" />

        <p className="text-sm font-medium text-slate-300">OR</p>

        <hr className="flex-1 border-slate-300" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex w-full max-w-md flex-col gap-2">
        {/* Google */}
        <button className="flex w-full items-center justify-center gap-4 rounded-lg border-b-2 bg-white p-2 text-lg font-bold text-black transition-all duration-300 active:scale-95 active:bg-white/70">
          <FaGoogle className="text-2xl" />

          <span>Login with Google</span>
        </button>

        {/* Facebook */}
        <button className="flex w-full items-center justify-center gap-4 rounded-lg border-b-2 bg-blue-500 p-2 text-lg font-bold text-black transition-all duration-300 active:scale-95 active:bg-blue-400">
          <FaFacebook className="text-2xl" />

          <span>Login with Facebook</span>
        </button>

        {/* Twitter */}
        <button className="flex w-full items-center justify-center gap-4 rounded-lg border-b-2 bg-sky-400 p-2 text-lg font-bold text-black transition-all duration-300 active:scale-95 active:bg-sky-300">
          <FaTwitter className="text-2xl" />

          <span>Login with Twitter</span>
        </button>
      </div>
    </>
  );
};

export default SocailMediaLog;
