const Login = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-xl p-2">
      {/* Email Input */}
      <input
        className="w-full rounded-md border-2 p-2 text-base outline-none transition-all duration-200 focus:border-blue-400 sm:text-lg"
        type="text"
        placeholder="Enter email"
      />

      {/* Password Section */}
      <div>
        <input
          className="w-full rounded-md border-2 p-2 text-base outline-none transition-all duration-200 focus:border-blue-400 sm:text-lg"
          type="password"
          placeholder="Enter password"
        />

        {/* Error + Forget Password */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-red-500 sm:text-base">
            Wrong Password
          </p>

          <a
            className="text-sm text-blue-500 hover:underline sm:text-base"
            href="#"
          >
            Forget password ?
          </a>
        </div>
      </div>

      {/* Login Button */}
      <button className="w-full cursor-pointer transition-all active:scale-95 duration-300 rounded-2xl bg-green-500 p-3 text-lg font-semibold transition-all duration-200 active:bg-green-700 sm:text-xl">
        LOG IN
      </button>
    </div>
  );
};

export default Login;
