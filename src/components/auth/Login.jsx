import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetPassword } from "../../redux/actions/authenticationAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, isLoading, preferences } = useSelector(
    (state) => state.authenticationReducer
  );

  const isDark = preferences?.theme === "dark";

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!error) return;
    switch (error) {
      case "auth/invalid-credential":
        toast.error("Invalid email or password");
        break;
      case "auth/user-not-found":
        toast.error("Account does not exist");
        break;
      case "auth/wrong-password":
        toast.error("Wrong password");
        break;
      case "auth/invalid-email":
        toast.error("Invalid email address");
        break;
      default:
        toast.error("Login failed");
    }
  }, [error]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(loginUser(email, password));
  };

  const handleForgotPassword = async () => {
    const email = formData.email.trim();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    const success = await dispatch(resetPassword(email));
    if (success) {
      toast.success("Password reset email sent");
    } else {
      toast.error("Failed to send reset email");
    }
  };

  const inputStyle = `w-full rounded-lg border p-3 text-base outline-none transition-all duration-200 focus:border-sky-500 ${
    isDark
      ? "border-slate-600 bg-slate-800 text-white placeholder:text-slate-400"
      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500"
  }`;

  return (
    <form
      onSubmit={handleLogin}
      className={`w-full max-w-md rounded-xl border p-6 shadow-sm ${
        isDark
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputStyle}
        />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={inputStyle}
          />
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className={`text-sm hover:underline ${
                isDark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-green-500 p-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Logging In..." : "LOG IN"}
        </button>
      </div>
    </form>
  );
};

export default Login;