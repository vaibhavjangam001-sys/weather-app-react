import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../redux/actions/authenticationAction";
import { toast } from "react-toastify";

const Signup = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const toastShownRef = useRef(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isLoading, isSignupSuccess, isAuthenticated, preferences } =
    useSelector((state) => state.authenticationReducer);

  const isDark = preferences?.theme === "dark";

  useEffect(() => {
    if (!error) return;
    switch (error) {
      case "auth/email-already-in-use":
        toast.error("Account already exists");
        break;
      case "auth/weak-password":
        toast.error("Password must be at least 6 characters");
        break;
      case "auth/invalid-email":
        toast.error("Invalid email address");
        break;
      default:
        toast.error("Account creation failed");
    }
  }, [error]);

  useEffect(() => {
    if (!isAuthenticated || !isSignupSuccess || toastShownRef.current) return;

    toastShownRef.current = true;
    setFormData({ username: "", email: "", password: "" });
    toast.success("Account created successfully!");

    setTimeout(() => {
      if (onSignupSuccess) {
        onSignupSuccess();
      } else {
        navigate("/");
      }
    }, 1500);
  }, [isAuthenticated, isSignupSuccess, navigate, onSignupSuccess]);

  const handleSignup = (e) => {
    e.preventDefault();
    const username = formData.username.trim();
    const email = formData.email.trim();
    const password = formData.password;

    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    toastShownRef.current = false;
    dispatch(signupUser(username, email, password));
  };

  const inputStyle = `w-full rounded-lg border p-3 outline-none transition-all duration-200 focus:border-sky-500 ${
    isDark
      ? "border-slate-600 bg-slate-800 text-white placeholder:text-slate-400"
      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-500"
  }`;

  return (
    <form
      onSubmit={handleSignup}
      className={`w-full max-w-md rounded-xl border p-6 shadow-sm ${
        isDark
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Username"
          value={formData.username}
          onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
          className={inputStyle}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          className={inputStyle}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-green-500 p-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </form>
  );
};

export default Signup;