import { useSelector } from "react-redux";
import { IoIosMail } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";

const Profile = () => {
  const usersData = useSelector(
    (state) => state.authenticationReducer.usersData,
  );

  const username = usersData?.username
    ? usersData.username.charAt(0).toUpperCase() + usersData.username.slice(1)
    : "N/A";

  const email = usersData?.email || "N/A";

  const uid = usersData?.uid || "N/A";

  return (
    <div className="min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-4rem)] p-4 flex justify-center items-center">
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {/* User ID */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-3 rounded-lg bg-white/20">
          <div className="w-full sm:w-32 flex flex-col items-center justify-center bg-white/30 p-3 rounded-lg">
            <BsPersonFill className="text-3xl" />
            <p className="font-semibold">User ID</p>
          </div>

          <div className="flex-1 w-full text-center font-bold text-sm sm:text-lg p-5 rounded-lg bg-white/30 break-all">
            {uid}
          </div>
        </div>

        {/* Username */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-3 rounded-lg bg-white/20">
          <div className="w-full sm:w-32 flex flex-col items-center justify-center bg-white/30 p-3 rounded-lg">
            <BsPersonFill className="text-3xl" />
            <p className="font-semibold">Username</p>
          </div>

          <div className="flex-1 w-full text-center font-bold text-lg sm:text-2xl p-5 rounded-lg bg-white/30 break-words">
            {username}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-3 rounded-lg bg-white/20">
          <div className="w-full sm:w-32 flex flex-col items-center justify-center bg-white/30 p-3 rounded-lg">
            <IoIosMail className="text-3xl" />
            <p className="font-semibold">Email</p>
          </div>

          <div className="flex-1 w-full text-center font-bold text-sm sm:text-xl p-5 rounded-lg bg-white/30 break-words">
            {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
