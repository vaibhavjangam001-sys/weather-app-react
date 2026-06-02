import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/actions/authenticationAction";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { error, isLoading } = useSelector(
    (state) => state.authenticationReducer,
  );

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

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    dispatch(
      signupUser(
        formData.username,
        formData.email,
        formData.password,
      ),
    );
  };

  const inputStyle =
    "w-full rounded-md border-2 p-2 text-base outline-none transition-all duration-200 focus:border-blue-400 sm:text-lg";

  return (
    <form
      onSubmit={handleSignup}
      className="flex w-full max-w-md flex-col gap-4 rounded-xl p-2"
    >
      {/* Username */}
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>

        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
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
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          autoComplete="email"
          placeholder="Enter email"
          className={inputStyle}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="sr-only">
          New Password
        </label>

        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          autoComplete="new-password"
          placeholder="Enter new password"
          className={inputStyle}
        />
      </div>

      {/* Create Account */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full cursor-pointer rounded-2xl bg-green-500 p-3 text-lg font-bold transition-all duration-300 active:scale-95 active:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 sm:text-xl"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default Signup;