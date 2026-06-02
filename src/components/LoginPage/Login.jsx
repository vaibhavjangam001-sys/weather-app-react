import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authenticationAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, isLoading } = useSelector(
    (state) => state.authenticationReducer,
  );

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login Successful");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  console.log("isAuthenticated =", isAuthenticated);

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

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(loginUser(formData.email, formData.password));
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-xl p-2">
      {/* Email Input */}
      <input
        className="w-full rounded-md border-2 p-2 text-base outline-none transition-all duration-200 focus:border-blue-400 sm:text-lg"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />

      {/* Password */}
      <div>
        <input
          className="w-full rounded-md border-2 p-2 text-base outline-none transition-all duration-200 focus:border-blue-400 sm:text-lg"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <div className="mt-2 flex items-center justify-end">
          <a
            className="text-sm text-blue-500 hover:underline sm:text-base"
            href="#"
          >
            Forget password ?
          </a>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        type="button"
        disabled={isLoading}
        className="w-full cursor-pointer rounded-2xl bg-green-500 p-3 text-lg font-semibold transition-all duration-300 active:scale-95 active:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 sm:text-xl"
      >
        {isLoading ? "Logging In..." : "LOG IN"}
      </button>
    </div>
  );
};

export default Login;
