import { useSelector } from "react-redux";
import { IoIosMail } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";

const Profile = () => {
  const { usersData, preferences } = useSelector(
    (state) => state.authenticationReducer,
  );

  const isDark = preferences?.theme === "dark";

  const username = usersData?.username
    ? usersData.username.charAt(0).toUpperCase() +
      usersData.username.slice(1)
    : "N/A";

  const email = usersData?.email || "N/A";
  const uid = usersData?.uid || "N/A";

  const containerClass = isDark
    ? "border-slate-700 bg-slate-800 text-white"
    : "border-slate-200 bg-white text-slate-900";

  const innerClass = isDark
    ? "border-slate-700 bg-slate-900"
    : "border-slate-200 bg-slate-50";

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4 sm:min-h-[calc(100vh-4rem)]">
      <div className="flex w-full max-w-4xl flex-col gap-4">
        {/* Account ID */}
        <div
          className={`flex flex-col items-center gap-4 rounded-lg border p-3 shadow-sm sm:flex-row ${containerClass}`}
        >
          <div
            className={`flex w-full flex-col items-center justify-center rounded-lg border p-3 sm:w-32 ${innerClass}`}
          >
            <BsPersonFill className="text-3xl" />
            <p className="font-semibold">Account ID</p>
          </div>

          <div
            className={`w-full flex-1 break-all rounded-lg border p-5 text-center text-sm font-bold sm:text-lg ${innerClass}`}
          >
            {uid}
          </div>
        </div>

        {/* Username */}
        <div
          className={`flex flex-col items-center gap-4 rounded-lg border p-3 shadow-sm sm:flex-row ${containerClass}`}
        >
          <div
            className={`flex w-full flex-col items-center justify-center rounded-lg border p-3 sm:w-32 ${innerClass}`}
          >
            <BsPersonFill className="text-3xl" />
            <p className="font-semibold">Username</p>
          </div>

          <div
            className={`w-full flex-1 break-words rounded-lg border p-5 text-center text-lg font-bold sm:text-2xl ${innerClass}`}
          >
            {username}
          </div>
        </div>

        {/* Email */}
        <div
          className={`flex flex-col items-center gap-4 rounded-lg border p-3 shadow-sm sm:flex-row ${containerClass}`}
        >
          <div
            className={`flex w-full flex-col items-center justify-center rounded-lg border p-3 sm:w-32 ${innerClass}`}
          >
            <IoIosMail className="text-3xl" />
            <p className="font-semibold">Email</p>
          </div>

          <div
            className={`w-full flex-1 break-words rounded-lg border p-5 text-center text-sm font-bold sm:text-xl ${innerClass}`}
          >
            {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;