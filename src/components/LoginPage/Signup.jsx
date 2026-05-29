import React from "react";

const Signup = () => {
  const inputStyle =
    "w-full rounded-md border-2 p-2 text-base outline-none transition-all duration-200 focus:border-blue-400 sm:text-lg";

  return (
    <form className="flex w-full max-w-md flex-col gap-4 rounded-xl p-2">
      {/* Username */}
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          type="text"
          autoComplete="username"
          placeholder="Enter Username"
          className={inputStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Enter email"
          className={inputStyle}
        />
      </div>

      {/* Verification Code */}
      <div className="flex gap-2">
        <div className="flex-1">
          <label htmlFor="verificationCode" className="sr-only">
            Verification Code
          </label>
          <input
            id="verificationCode"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter Verification code"
            className={inputStyle}
          />
        </div>

        <button
          type="button"
          className="min-w-[140px] cursor-pointer rounded-md bg-green-500 p-2 text-lg font-bold transition-all duration-300 active:scale-95 active:bg-green-700"
        >
          Send Code
        </button>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="sr-only">
          New Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="Enter new password"
          className={inputStyle}
        />
      </div>

      {/* Create Account */}
      <button
        type="submit"
        className="w-full cursor-pointer rounded-2xl bg-green-500 p-3 text-lg font-bold transition-all duration-300 active:scale-95 active:bg-green-700 sm:text-xl"
      >
        Create Account
      </button>
    </form>
  );
};

export default Signup;
